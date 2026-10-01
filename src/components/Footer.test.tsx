import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('renders the AI + Compassion logo and text', () => {
    const onNavigate = vi.fn();
    const onJoinClick = vi.fn();
    
    render(<Footer onNavigate={onNavigate} onJoinClick={onJoinClick} />);
    
    expect(screen.getByText(/AI \+ COMPASSION/i)).toBeInTheDocument();
  });

  it('renders contact emails from reference design', () => {
    const onNavigate = vi.fn();
    const onJoinClick = vi.fn();
    
    render(<Footer onNavigate={onNavigate} onJoinClick={onJoinClick} />);
    
    expect(screen.getByText(/General inquiries/i)).toBeInTheDocument();
    expect(screen.getAllByText(/connect@compassionai\.io/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/jsuto@SCUBEDLLC\.com/i)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    const onNavigate = vi.fn();
    const onJoinClick = vi.fn();
    
    render(<Footer onNavigate={onNavigate} onJoinClick={onJoinClick} />);
    
    const xLink = screen.getByLabelText(/X \(Twitter\)/i);
    const discordLink = screen.getByLabelText(/Discord/i);
    
    expect(xLink).toHaveAttribute('href', 'https://x.com/ai_compassion');
    expect(discordLink).toHaveAttribute('href', 'https://discord.com/invite/3hzvqf4qJ');
  });

  it('renders partner foundation link', () => {
    const onNavigate = vi.fn();
    const onJoinClick = vi.fn();
    
    render(<Footer onNavigate={onNavigate} onJoinClick={onJoinClick} />);
    
    expect(screen.getByText(/Goi Peace/i)).toBeInTheDocument();
    expect(screen.getByText(/Foundation/i)).toBeInTheDocument();
  });
});
