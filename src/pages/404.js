import React from 'react';
if (typeof window !== `undefined`) {
  export default function NotFound() {
    window.location = '/';

    return null;
  }
}