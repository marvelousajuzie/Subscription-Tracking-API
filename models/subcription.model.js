import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: [true, 'Subscription name is required'],
    trim: true,
    maxlength: 100,
  },
  plan: {
    type: String,
    required: true,
    trim: true,
  },
  price: {  
    type: Number,
    required: true,
    min: [0, 'Price must be positive number'],
    max: [10000, 'Price exceeds the limit'],
  },
  currency: {
    type: String,
    enum: ['USD', 'EUR', 'GBP', 'INR'],
    default: 'USD',
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
    required: true,
  },
  category: {
    type: String,
    enum: ['entertainment', 'education', 'productivity', 'health', 'other'],
    required: true,
    lowercase: true
  },
  paymentMethod: {  
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'canceled', 'expired'],
    default: 'active',
  },
  startDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return v <= new Date();
      },
      message: 'Start date cannot be in the future',
    },
  },
  renewalDate: {
    type: Date,
    validate: {
      validator: function (v) {
        return v > new Date();
      },
      message: 'Renewal date must be in the future',
    },
  }
}, { timestamps: true });

subscriptionSchema.pre('save', async function (){
  if (!this.renewalDate) {
    const renewalPeriod = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);
  }
  
  // Auto update if renewalDate is past due
  if (this.renewalDate <= new Date()) {
    this.status = 'expired';
  }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;