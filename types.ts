import { LucideIcon } from "lucide-react";

export interface SubPage {
  id: string;
  slug: string;
  title: string;
  heroImage: string;
  excerpt: string;
  description: string;
  secondaryContent: string;
  features?: string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  features: string[];
  // New fields for Hub Page
  keyPoints?: string[];
  children?: SubPage[];
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  // New fields for Hub Page
  longDescription?: string;
  keyPoints?: string[];
  children?: SubPage[];
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  date: string;
  rating: number;
}

export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

export interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  linkText?: string;
  onClick?: () => void;
  className?: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  description: string;
  capacity: number;
  luggage: number;
  imageUrl: string;
  features: string[];
  category: 'SUV' | 'Van' | 'Bus' | 'Sedan';
}

// User & Dashboard Types

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
}

export interface PaymentMethod {
  id: string;
  last4: string;
  brand: string; // 'Visa', 'Mastercard', etc.
  expiry: string;
  isDefault: boolean;
}

export type TripStatus = 'Scheduled' | 'En Route' | 'In Progress' | 'Completed' | 'Cancelled';

export interface TripGuest {
  email: string;
  status: 'Pending' | 'Accepted';
}

export interface Trip {
  id: string;
  date: string; // ISO string
  time: string;
  pickupLocation: string;
  dropoffLocation: string;
  stops?: string[]; // Intermediate stops
  vehicleId: string;
  serviceId?: string; // ID of the Service booked
  status: TripStatus;
  price: number;
  driverName?: string;
  driverPhone?: string;
  driverRating?: number;
  driverPhoto?: string;
  notes?: string;
  guests?: TripGuest[];
  flightNumber?: string;
}