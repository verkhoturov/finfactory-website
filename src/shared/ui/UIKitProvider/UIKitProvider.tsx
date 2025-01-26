'use client';

import React from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export const UIKitProvider = ({ children }: { children: React.ReactNode }) => (
    <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
);
