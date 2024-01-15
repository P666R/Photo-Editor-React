import React from 'react';

type NavbarProps = {
  onChangeImageLink: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ onChangeImageLink }: NavbarProps) {
  return (
    <nav>
      <span>Photo Editor</span>
      <input
        type="text"
        placeholder="Image link..."
        onChange={(e) => onChangeImageLink(e.target.value)}
      />
    </nav>
  );
}
