
/* 
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

import type { JSX } from 'react';

export type ProjectType = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  githubLink?: string;
  desc?: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  projects: string;
  icon: JSX.Element;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type StatsType = {
  number: string;
  label: string;
};

export type TestimonialsType = {
  name: string;
  role: string;
  image: string;
  text: string;
  link: string;
};

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};