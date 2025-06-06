import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Common icon library
export const ICON_LIBRARY: { [key: string]: string } = {
  // Navigation
  'home': `<path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'menu': `<path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'close': `<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'arrow-left': `<path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'arrow-right': `<path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'arrow-up': `<path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'arrow-down': `<path d="M12 5V19M19 12L12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'chevron-left': `<path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'chevron-right': `<path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'chevron-up': `<path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'chevron-down': `<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  // Actions
  'search': `<circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
             <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'filter': `<polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>`,
  
  'sort': `<path d="M3 6H21M7 12H17M11 18H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'edit': `<path d="M11 4H4C3.44772 4 3 4.44772 3 5V20C3 20.5523 3.44772 21 4 21H19C19.5523 21 20 20.5523 20 20V13" stroke="currentColor" stroke-width="2" fill="none"/>
           <path d="M18.5 2.50023C18.8978 2.10243 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10243 21.5 2.50023C21.8978 2.89804 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.10243 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'delete': `<polyline points="3,6 5,6 21,6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'add': `<path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'copy': `<rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
           <path d="M5 15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V5" stroke="currentColor" stroke-width="2" fill="none"/>`,
  
  // Status
  'check': `<polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'check-circle': `<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4906 2.02168 11.3407C2.16356 9.19077 2.99721 7.14613 4.39828 5.49707C5.79935 3.84801 7.69279 2.69227 9.79619 2.20175C11.8996 1.71123 14.1003 1.90929 16.07 2.76" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'x-circle': `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
               <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  
  'alert-circle': `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                   <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                   <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  
  'info': `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
           <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
           <line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  
  // UI Elements
  'heart': `<path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>`,
  
  'star': `<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>`,
  
  'star-filled': `<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor"/>`,
  
  'settings': `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
               <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.2573 9.77251 19.9887C9.5799 19.7201 9.31074 19.5176 9 19.41C8.69838 19.2769 8.36381 19.2372 8.03941 19.296C7.71502 19.3548 7.41568 19.5095 7.18 19.74L7.12 19.8C6.93425 19.986 6.71368 20.1335 6.47088 20.2341C6.22808 20.3348 5.96783 20.3866 5.705 20.3866C5.44217 20.3866 5.18192 20.3348 4.93912 20.2341C4.69632 20.1335 4.47575 19.986 4.29 19.8C4.10405 19.6143 3.95653 19.3937 3.85588 19.1509C3.75523 18.9081 3.70343 18.6478 3.70343 18.385C3.70343 18.1222 3.75523 17.8619 3.85588 17.6191C3.95653 17.3763 4.10405 17.1557 4.29 16.97L4.35 16.91C4.58054 16.6743 4.73519 16.375 4.794 16.0506C4.85282 15.7262 4.81312 15.3916 4.68 15.09C4.55324 14.7942 4.34276 14.542 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742742 9.96512 4.0113 9.77251C4.27986 9.5799 4.48236 9.31074 4.59 9C4.72312 8.69838 4.76282 8.36381 4.704 8.03941C4.64519 7.71502 4.49054 7.41568 4.26 7.18L4.2 7.12C4.01405 6.93425 3.86653 6.71368 3.76588 6.47088C3.66523 6.22808 3.61343 5.96783 3.61343 5.705C3.61343 5.44217 3.66523 5.18192 3.76588 4.93912C3.86653 4.69632 4.01405 4.47575 4.2 4.29C4.38575 4.10405 4.60632 3.95653 4.84912 3.85588C5.09192 3.75523 5.35217 3.70343 5.615 3.70343C5.87783 3.70343 6.13808 3.75523 6.38088 3.85588C6.62368 3.95653 6.84425 4.10405 7.03 4.29L7.09 4.35C7.32568 4.58054 7.62502 4.73519 7.94941 4.794C8.27381 4.85282 8.60838 4.81312 8.91 4.68H9C9.29577 4.55324 9.54802 4.34276 9.73570 4.07447C9.92338 3.80618 10.0187 3.49179 10.02 3.17V3C10.02 2.46957 10.2307 1.96086 10.6058 1.58579C10.9809 1.21071 11.4896 1 12.02 1C12.5504 1 13.0591 1.21071 13.4342 1.58579C13.8093 1.96086 14.02 2.46957 14.02 3V3.09C14.0213 3.41179 14.1166 3.72618 14.3043 3.99447C14.492 4.26276 14.7442 4.47324 15.04 4.6C15.3416 4.73312 15.6762 4.77282 16.0006 4.714C16.325 4.65519 16.6243 4.50054 16.86 4.27L16.92 4.21C17.1057 4.02405 17.3263 3.87653 17.5691 3.77588C17.8119 3.67523 18.0722 3.62343 18.335 3.62343C18.5978 3.62343 18.8581 3.67523 19.1009 3.77588C19.3437 3.87653 19.5643 4.02405 19.75 4.21C19.936 4.39575 20.0835 4.61632 20.1841 4.85912C20.2848 5.10192 20.3366 5.36217 20.3366 5.625C20.3366 5.88783 20.2848 6.14808 20.1841 6.39088C20.0835 6.63368 19.936 6.85425 19.75 7.04L19.69 7.1C19.4595 7.33568 19.3048 7.63502 19.246 7.95941C19.1872 8.28381 19.2269 8.61838 19.36 8.92V9C19.4868 9.29577 19.6972 9.54802 19.9655 9.73570C20.2338 9.92338 20.5482 10.0187 20.87 10.02H21C21.5304 10.02 22.0391 10.2307 22.4142 10.6058C22.7893 10.9809 23 11.4896 23 12.02C23 12.5504 22.7893 13.0591 22.4142 13.4342C22.0391 13.8093 21.5304 14.02 21 14.02H20.91C20.5882 14.0213 20.2738 14.1166 20.0055 14.3043C19.7372 14.492 19.5268 14.7442 19.4 15.04V15Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'user': `<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
           <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>`,
  
  'users': `<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  // File types
  'file': `<path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
           <polyline points="13,2 13,9 20,9" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'download': `<path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
               <polyline points="7,10 12,15 17,10" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
               <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  
  'upload': `<path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
             <polyline points="17,8 12,3 7,8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
             <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  
  // Devices
  'phone': `<path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C16.74 20.97 13.5649 19.9296 10.89 18C8.2151 16.0704 6.07044 13.365 4.72 10.27C3.02008 7.58756 1.99826 4.41476 2 1.16C2 0.626566 2.21071 0.117859 2.58579 -0.257107C2.96086 -0.632074 3.46957 -0.842784 4 -0.842784H6.09C6.6725 -0.843675 7.2372 -0.641964 7.6801 -0.275417C8.123 0.0911302 8.41471 0.509818 8.5 0.98L9.2 4.98C9.28973 5.46149 9.22413 5.96086 9.01429 6.40089C8.80445 6.84092 8.46238 7.19825 8.04 7.42L6.81 8.03C7.91454 10.6985 9.80146 12.5854 12.47 13.69L13.08 12.46C13.3018 12.0376 13.6591 11.6956 14.0991 11.4857C14.5391 11.2759 15.0385 11.2103 15.52 11.3L19.52 12C19.9902 12.0853 20.4089 12.377 20.7754 12.8199C21.142 13.2628 21.4436 13.8275 21.44 14.41L22 16.92Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'mail': `<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
           <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  
  'calendar': `<rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
               <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  
  'clock': `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
            <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};

@Component({
  selector: 'sog-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
      class="sog-icon"
      [ngClass]="getIconClasses()"
      [attr.width]="getSize()"
      [attr.height]="getSize()"
      [attr.viewBox]="viewBox"
      [attr.fill]="fill"
      xmlns="http://www.w3.org/2000/svg"
      [innerHTML]="getSafeIconSvg()"
    >
    </svg>
  `,
  styles: [
    `
      .sog-icon {
        display: inline-block;
        vertical-align: middle;
        flex-shrink: 0;
        
        &.xs { width: 12px; height: 12px; }
        &.sm { width: 16px; height: 16px; }
        &.md { width: 20px; height: 20px; }
        &.lg { width: 24px; height: 24px; }
        &.xl { width: 32px; height: 32px; }
        &.xxl { width: 48px; height: 48px; }
        
        &.primary { color: #3498db; }
        &.secondary { color: #6c757d; }
        &.success { color: #27ae60; }
        &.danger { color: #e74c3c; }
        &.warning { color: #f39c12; }
        &.info { color: #17a2b8; }
        &.light { color: #f8f9fa; }
        &.dark { color: #343a40; }
        &.muted { color: #6c757d; opacity: 0.6; }
        
        // Custom colors
        &.inherit { color: inherit; }
        &.current { color: currentColor; }
      }
    `,
  ],
})
export class SognatoreIcon {
  @Input() name: string = '';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'custom' = 'md';
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'muted' | 'inherit' | 'current' = 'current';
  @Input() customSize: number = 20;
  @Input() customSvg: string = '';
  @Input() viewBox: string = '0 0 24 24';
  @Input() fill: string = 'none';

  constructor(private sanitizer: DomSanitizer) {}

  getSize(): number {
    if (this.size === 'custom') return this.customSize;
    
    const sizeMap = {
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
      xxl: 48
    };
    
    return sizeMap[this.size];
  }

  getIconSvg(): string {
    if (this.customSvg) {
      return this.customSvg;
    }
    
    return ICON_LIBRARY[this.name] || '';
  }

  getSafeIconSvg(): SafeHtml {
    const svgContent = this.getIconSvg();
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  getIconClasses(): string[] {
    const safeSize = typeof this.size === 'string' ? this.size : 'md';
    const safeColor = typeof this.color === 'string' ? this.color : 'current';
    
    return [safeSize, safeColor];
  }
}

// Icon service for dynamic icon registration
export class SogIconService {
  private static customIcons: { [key: string]: string } = {};

  static registerIcon(name: string, svg: string): void {
    this.customIcons[name] = svg;
    ICON_LIBRARY[name] = svg;
  }

  static registerIcons(icons: { [key: string]: string }): void {
    Object.keys(icons).forEach(name => {
      this.registerIcon(name, icons[name]);
    });
  }

  static getIcon(name: string): string | undefined {
    return ICON_LIBRARY[name];
  }

  static getAllIcons(): string[] {
    return Object.keys(ICON_LIBRARY);
  }
}