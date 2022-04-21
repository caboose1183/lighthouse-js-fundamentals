function calculateRectangleArea (length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  let rectangleArea = length * width;
  return rectangleArea;
}

function calculateTriangleArea (base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  }
  let triangleArea = base * height / 2;
  return triangleArea;
}

function calculateCircleArea (radius) {
  if (radius < 0) {
    return undefined;
  }
  let circleArea = radius * radius * Math.PI;
  return circleArea;
}

console.log (calculateRectangleArea(10, -5));