export interface NavLink {
  label: string;
  view: View;
}

export type View = 'home' | 'about' | 'contact' | 'privacy' | 'rti' | 'disclosure' | 'handbook' | 'bug_report' | 'not_found';

export enum UserRole {
  GUEST = 'GUEST',
  ADMIN = 'ADMIN',
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface AccessibilityState {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  readableFont: boolean;
  highlightLinks: boolean;
}