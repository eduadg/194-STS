import React from 'react';

// Componente base para ícones
const Icon = ({ children, size = 20, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block' }}
    className={className}
    {...props}
  >
    {children}
  </svg>
);

// Ícones de navegação
export const DashboardIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
      fill="currentColor"
    />
  </Icon>
);

export const ProjectIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"
      fill="currentColor"
    />
  </Icon>
);

export const TaskIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-5 14l-5-5 1.41-1.41L14 14.17l7.59-7.59L23 8l-9 9z"
      fill="currentColor"
    />
  </Icon>
);

export const AnalyticsIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
      fill="currentColor"
    />
  </Icon>
);

export const SettingsIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
      fill="currentColor"
    />
  </Icon>
);

// Ícones de interface
export const SearchIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      fill="currentColor"
    />
  </Icon>
);

export const NotificationIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
      fill="currentColor"
    />
  </Icon>
);

export const UserIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      fill="currentColor"
    />
  </Icon>
);

export const LogoutIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
      fill="currentColor"
    />
  </Icon>
);

// Ícones de dados/métricas
export const TrendUpIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
      fill="currentColor"
    />
  </Icon>
);

export const EyeIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
      fill="currentColor"
    />
  </Icon>
);

export const ShoppingCartIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill="currentColor"
    />
  </Icon>
);

// Ícones de ação
export const AddIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
      fill="currentColor"
    />
  </Icon>
);

export const EditIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
      fill="currentColor"
    />
  </Icon>
);

export const DeleteIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      fill="currentColor"
    />
  </Icon>
);

// Ícones de autenticação
export const EyeOffIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
      fill="currentColor"
    />
  </Icon>
);

export const EmailIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      fill="currentColor"
    />
  </Icon>
);

export const LockIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
      fill="currentColor"
    />
  </Icon>
);

// Ícones de status
export const CheckIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      fill="currentColor"
    />
  </Icon>
);

export const CloseIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      fill="currentColor"
    />
  </Icon>
);

export const WarningIcon = ({ size, className, ...props }) => (
  <Icon size={size} className={className} {...props}>
    <path
      d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      fill="currentColor"
    />
  </Icon>
); 