import { Card, Loader } from '@nebular-react/core';
import React, { useRef } from 'react';

export function LoaderSizes() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);
  const containerRef4 = useRef<HTMLDivElement>(null);
  const containerRef5 = useRef<HTMLDivElement>(null);

  return (
    <>
      <Card ref={containerRef1}>
        <Card.Body>Some card content.</Card.Body>
      </Card>
      <Loader loaderContainerRef={containerRef1} isLoading status="primary" size="tiny" />
      <Card ref={containerRef2}>
        <Card.Body>Some card content.</Card.Body>
      </Card>
      <Loader loaderContainerRef={containerRef2} isLoading status="primary" size="small" />
      <Card ref={containerRef3}>
        <Card.Body>Some card content.</Card.Body>
      </Card>
      <Loader loaderContainerRef={containerRef3} isLoading status="primary" size="medium" />
      <Card ref={containerRef4}>
        <Card.Body>Some card content.</Card.Body>
      </Card>
      <Loader loaderContainerRef={containerRef4} isLoading status="primary" size="large" />
      <Card ref={containerRef5}>
        <Card.Body>Some card content.</Card.Body>
      </Card>
      <Loader loaderContainerRef={containerRef5} isLoading status="primary" size="giant" />
    </>
  );
}
