type Point = {
  x: number;
  y: number;
};

/**
 * generate pseudo random number from seed
 */
function random(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

/**
 * generate point for blob
 */
function generatePoints(
  seed: number,
  count: number,
  center: number,
  radius: number,
  variation: number
): Point[] {
  const points: Point[] = [];

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;

    const randomValue = random(seed + i);

    // change radious randomly
    const distance = radius * (1 - variation + randomValue * variation * 2);

    points.push({
      x: center + Math.cos(angle) * distance,
      y: center + Math.sin(angle) * distance,
    });
  }

  return points;
}

/**
 * generate smooth SVG path from point array
 */
function createSmoothPath(points: Point[]): string {
  const len = points.length;

  let path = "";

  for (let i = 0; i < len; i++) {
    const current = points[i];

    const previous = points[(i - 1 + len) % len];
    const next = points[(i + 1) % len];

    const controlPoint1 = {
      x: current.x + (next.x - previous.x) / 6,
      y: current.y + (next.y - previous.y) / 6,
    };

    const nextPoint = next;

    const controlPoint2 = {
      x: nextPoint.x - (points[(i + 2) % len].x - current.x) / 6,
      y: nextPoint.y - (points[(i + 2) % len].y - current.y) / 6,
    };

    if (i === 0) {
      path += `M ${current.x} ${current.y}`;
    }

    path += `
      C
      ${controlPoint1.x} ${controlPoint1.y},
      ${controlPoint2.x} ${controlPoint2.y},
      ${nextPoint.x} ${nextPoint.y}
    `;
  }

  path += " Z";

  return path;
}

/**
 * generate SVG path fro blob
 */
export function generateBlobPath(
  seed = 1,
  count = 10,
  size = 300,
  variation = 0.25
): string {
  const center = size / 2;
  const radius = size * 0.38;

  const points = generatePoints(
    seed,
    count,
    center,
    radius,
    variation
  );

  return createSmoothPath(points);
}