import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const ip = req.ip || 
                   req.headers['x-forwarded-for']?.split(',')[0] || 
                   req.socket.remoteAddress || 
                   '127.0.0.1';
        
        console.log('[Arcjet] Client IP:', ip);
        

        const decision = await aj.protect(req, { 
            requested: 1,
            ip: ip 
        });
        
        console.log('[Arcjet] Decision:', {
            conclusion: decision.conclusion,
            reason: decision.reason,
            isDenied: decision.isDenied(),
        });


        for (const result of decision.results) {
            if (result.reason.isRateLimit()) {
                console.log('[Arcjet] Rate Limit Details:', {
                    remaining: result.reason.remaining,
                    limit: result.reason.max,
                    reset: result.reason.reset,
                });
            }
        }

        if (decision.isDenied()) {
            console.log('[Arcjet] Request DENIED');
            
    
            if (decision.reason.isRateLimit()) {
                console.log('[Arcjet] Denied due to: RATE LIMIT');
                return res.status(429).json({
                    success: false, 
                    error: "Rate limit exceeded. Please try again later."
                });
            }
            
            // Check bot detection
            if (decision.reason.isBot()) {
                console.log('[Arcjet] Denied due to: BOT DETECTED');
                return res.status(403).json({
                    success: false, 
                    error: "Bot detected"
                });
            }
            
            // Check shield
            if (decision.reason.isShield()) {
                console.log('[Arcjet] Denied due to: SHIELD');
                return res.status(403).json({
                    success: false, 
                    error: "Request blocked by security shield"
                });
            }
            
            // Generic denial
            console.log('[Arcjet] Denied due to: UNKNOWN');
            return res.status(403).json({
                success: false, 
                error: "Access denied"
            });
        }
        
        console.log('[Arcjet] Request ALLOWED');
        next();
    } catch (error) {
        console.error("Arcjet Middleware Error:", error);
        next();
    }
}

export default arcjetMiddleware;