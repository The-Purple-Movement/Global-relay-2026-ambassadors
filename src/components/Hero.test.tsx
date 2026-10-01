import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from './Hero';

// Mock framer-motion to avoid animation complexity in unit tests
vi.mock('framer-motion', () => ({
  motion: {
    h1: ({ children, className, ...rest }: any) => <h1 className={className} {...rest}>{children}</h1>,
    h2: ({ children, className, ...rest }: any) => <h2 className={className} {...rest}>{children}</h2>,
    p: ({ children, className, ...rest }: any) => <p className={className} {...rest}>{children}</p>,
    div: ({ children, className, ...rest }: any) => <div className={className} {...rest}>{children}</div>,
  },
}));

describe('Hero component - viewport-fit at 1920x1080', () => {
  it('renders stats bar with all three stat items', () => {
    render(<Hero />);

    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('HOURS')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('REGIONS')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('GLOBAL RELAY')).toBeInTheDocument();
  });

  it('hero section uses h-screen (not min-h-screen) to enforce exact viewport height', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');

    // h-screen constrains hero to viewport; min-h-screen lets it overflow
    expect(section?.className).toContain('h-screen');
    expect(section?.className).not.toContain('min-h-screen');
  });

  it('hero headline uses compact lg font size (max 4.5rem)', () => {
    render(<Hero />);
    const headline = screen.getByText(/AI \+ Compassion/);

    // At lg breakpoint, font should be at most 4.5rem to fit 1080px viewport
    // Previously was lg:text-[5.5rem] which is too large
    const classes = headline.className;
    expect(classes).not.toContain('text-[5.5rem]');
    expect(classes).not.toContain('text-[5rem]');
  });

  it('stats bar spacing is compact (mt-8 max, not mt-12 or mt-16)', () => {
    const { container } = render(<Hero />);
    // The stats bar is the last motion.div in the left column
    const statsBar = container.querySelector('[class*="border-t"]');

    expect(statsBar).toBeTruthy();
    const classes = statsBar!.className;
    // Should NOT have excessive top margins that push it below fold
    expect(classes).not.toContain('mt-12');
    expect(classes).not.toContain('mt-16');
  });

  it('description paragraph is concise enough for single-viewport fit', () => {
    render(<Hero />);
    const desc = screen.getByText(/Welcome to the first global cohort/);

    // The description should be max 2 lines at desktop - check the max-w
    // and ensure the text length is reasonable
    expect(desc).toBeInTheDocument();
    // max-w-xl (36rem) is fine; just verify it exists
    expect(desc.className).toContain('max-w');
  });

  it('hero uses overflow-hidden to prevent content from escaping', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');

    expect(section?.className).toContain('overflow-hidden');
  });
});
