import React from 'react';
import { icons } from './icons';
import type { IconName } from './icons';
import styles from './Icon.module.css';

interface IconProps {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
  viewBox?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  viewBox = '0 0 24 24',
}) => {
  const pathData = icons[name];

  if (!pathData) {
    console.warn(`Icon "${name}" not found in icons registry.`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.icon} ${className}`}
      aria-hidden="true"
    >
      <path d={pathData} />
    </svg>
  );
};

export default Icon;
