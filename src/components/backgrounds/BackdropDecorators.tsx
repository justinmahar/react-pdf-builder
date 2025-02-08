import React from 'react';
import { RectangleShape } from '../shapes/RectangleShape';
import { GradientType } from '../shapes/Gradients';

export class BackdropDecorators {
  // === Circles 1 === === ===
  public static circles1 = [
    <RectangleShape
      key="a"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '96%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '96%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '100%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.85, y: 0.01 }}
    />,
    <RectangleShape
      key="b"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '6%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '6%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '100%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.14, y: 0.15 }}
    />,
    <RectangleShape
      key="c"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '55%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '55%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '100%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.8, y: 0.9 }}
    />,
    <RectangleShape
      key="d"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '78%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '78%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '100%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.4, y: 0.07 }}
    />,
    <RectangleShape
      key="e"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '62%', stopColor: '#EDEDED', stopOpacity: 0.05 },
        { offset: '62%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '100%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.59, y: 1.05 }}
    />,
  ];

  // === Circles 2 === === ===
  public static circles2 = [
    <RectangleShape
      key="a"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#FBFBFB', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#FBFBFB', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#E5E5E5', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#E5E5E5', stopOpacity: 0.04 },
      ]}
      radialGradientCoords={{ x: 0.4, y: 0.91 }}
    />,
    <RectangleShape
      key="b"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#242424', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#242424', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#2E2E2E', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#2E2E2E', stopOpacity: 0.04 },
      ]}
      radialGradientCoords={{ x: 0.66, y: 0.97 }}
    />,
    <RectangleShape
      key="c"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#282828', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#282828', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#C8C8C8', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#C8C8C8', stopOpacity: 0.04 },
      ]}
      radialGradientCoords={{ x: 0.86, y: 0.07 }}
    />,
    <RectangleShape
      key="d"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#636363', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#636363', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#2D2D2D', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#2D2D2D', stopOpacity: 0.04 },
      ]}
      radialGradientCoords={{ x: 0.15, y: 0.16 }}
    />,
    <RectangleShape
      key="e"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#F3F3F3', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#F3F3F3', stopOpacity: 0.04 },
        { offset: '90%', stopColor: '#252525', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#252525', stopOpacity: 0.04 },
      ]}
      radialGradientCoords={{ x: 0.75, y: 0.99 }}
    />,
  ];

  // === Circles 3 === === ===
  public static circles3 = [
    <RectangleShape
      key="a"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '6%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '6%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '5%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.67, y: 0.83 }}
    />,
    <RectangleShape
      key="b"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '27%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '27%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '63%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.24, y: 0.8 }}
    />,
    <RectangleShape
      key="c"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '86%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '86%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '92%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.23, y: 0.05 }}
    />,
    <RectangleShape
      key="d"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '35%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '35%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '100%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.21, y: 0.06 }}
    />,
    <RectangleShape
      key="e"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '71%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '71%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '81%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.1, y: 0.51 }}
    />,
    <RectangleShape
      key="f"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '40%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '40%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '61%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.39, y: 0.61 }}
    />,
    <RectangleShape
      key="g"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '63%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '63%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '72%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.13, y: 0.77 }}
    />,
    <RectangleShape
      key="h"
      gradientType={GradientType.radial}
      gradient={[
        { offset: '0%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '37%', stopColor: '#f0f0f0', stopOpacity: 0.05 },
        { offset: '37%', stopColor: '#000000', stopOpacity: 0 },
        { offset: '82%', stopColor: '#000000', stopOpacity: 0 },
      ]}
      radialGradientCoords={{ x: 0.4, y: 0.96 }}
    />,
  ];

  // === Angles 1 === === ===
  public static angles1 = [
    <RectangleShape
      key="a"
      linearGradientCoords={{ x1: 0.0, y1: 0.0, x2: 0.8, y2: 1 }}
      gradient={[
        { offset: '0%', stopColor: '#a3a3a3', stopOpacity: 0.09 },
        { offset: '33.3%', stopColor: '#a3a3a3', stopOpacity: 0.09 },
        { offset: '33.3%', stopColor: '#646464', stopOpacity: 0.09 },
        { offset: '66.6%', stopColor: '#646464', stopOpacity: 0.09 },
        { offset: '66.6%', stopColor: '#a2a2a2', stopOpacity: 0.09 },
        { offset: '99%', stopColor: '#a2a2a2', stopOpacity: 0.09 },
      ]}
    />,
    <RectangleShape
      key="b"
      linearGradientCoords={{ x1: 0.8, y1: 1, x2: 0.0, y2: 0.0 }}
      gradient={[
        { offset: '0%', stopColor: '#c1c1c1', stopOpacity: 0.06 },
        { offset: '33.3%', stopColor: '#c1c1c1', stopOpacity: 0.06 },
        { offset: '33.3%', stopColor: '#a9a9a9', stopOpacity: 0.06 },
        { offset: '66.6%', stopColor: '#a9a9a9', stopOpacity: 0.06 },
        { offset: '66.6%', stopColor: '#5c5c5c', stopOpacity: 0.06 },
        { offset: '99%', stopColor: '#5c5c5c', stopOpacity: 0.06 },
      ]}
    />,
    <RectangleShape
      key="c"
      linearGradientCoords={{ x1: 0.8, y1: 0.2, x2: 0.2, y2: 0.8 }}
      gradient={[
        { offset: '0%', stopColor: '#2d2d2d', stopOpacity: 0.03 },
        { offset: '33.3%', stopColor: '#2d2d2d', stopOpacity: 0.03 },
        { offset: '33.3%', stopColor: '#dfdfdf', stopOpacity: 0.03 },
        { offset: '66.6%', stopColor: '#dfdfdf', stopOpacity: 0.03 },
        { offset: '66.6%', stopColor: '#adadad', stopOpacity: 0.03 },
        { offset: '99%', stopColor: '#adadad', stopOpacity: 0.03 },
      ]}
    />,
    <RectangleShape
      key="d"
      linearGradientCoords={{ x1: 0.2, y1: 1, x2: 0.2, y2: 0.0 }}
      gradient={[
        { offset: '0%', stopColor: '#e2e2e2', stopOpacity: 0.06 },
        { offset: '33.3%', stopColor: '#e2e2e2', stopOpacity: 0.06 },
        { offset: '33.3%', stopColor: '#515151', stopOpacity: 0.06 },
        { offset: '66.6%', stopColor: '#515151', stopOpacity: 0.06 },
        { offset: '66.6%', stopColor: '#bababa', stopOpacity: 0.06 },
        { offset: '99%', stopColor: '#bababa', stopOpacity: 0.06 },
      ]}
    />,
    <RectangleShape
      key="e"
      linearGradientCoords={{ x1: 0.1, y1: 0.9, x2: 0.7, y2: 0.2 }}
      gradient={[
        { offset: '0%', stopColor: '#e1e1e1', stopOpacity: 0.04 },
        { offset: '33.3%', stopColor: '#e1e1e1', stopOpacity: 0.04 },
        { offset: '33.3%', stopColor: '#5f5f5f', stopOpacity: 0.04 },
        { offset: '66.6%', stopColor: '#5f5f5f', stopOpacity: 0.04 },
        { offset: '66.6%', stopColor: '#272727', stopOpacity: 0.04 },
        { offset: '99%', stopColor: '#272727', stopOpacity: 0.04 },
      ]}
    />,
    <RectangleShape
      key="f"
      linearGradientCoords={{ x1: 0.2, y1: 0.8, x2: 0.2, y2: 0.2 }}
      gradient={[
        { offset: '0%', stopColor: '#b8b8b8', stopOpacity: 0.06 },
        { offset: '33.3%', stopColor: '#b8b8b8', stopOpacity: 0.06 },
        { offset: '33.3%', stopColor: '#000000', stopOpacity: 0.06 },
        { offset: '66.6%', stopColor: '#000000', stopOpacity: 0.06 },
        { offset: '66.6%', stopColor: '#8c8c8c', stopOpacity: 0.06 },
        { offset: '99.9%', stopColor: '#8c8c8c', stopOpacity: 0.06 },
      ]}
    />,
    <RectangleShape
      key="g"
      linearGradientCoords={{ x1: 0.8, y1: 0.9, x2: 0.0, y2: 0.1 }}
      gradient={[
        { offset: '0%', stopColor: '#282828', stopOpacity: 0.07 },
        { offset: '33.3%', stopColor: '#282828', stopOpacity: 0.07 },
        { offset: '33.3%', stopColor: '#d6d6d6', stopOpacity: 0.07 },
        { offset: '66.6%', stopColor: '#d6d6d6', stopOpacity: 0.07 },
        { offset: '66.6%', stopColor: '#bebebe', stopOpacity: 0.07 },
        { offset: '99.9%', stopColor: '#bebebe', stopOpacity: 0.07 },
      ]}
    />,
    <RectangleShape
      key="h"
      linearGradientCoords={{ x1: 0.1, y1: 0.9, x2: 0.8, y2: 0.1 }}
      gradient={[
        { offset: '0%', stopColor: '#e6e6e6', stopOpacity: 0 },
        { offset: '33.3%', stopColor: '#e6e6e6', stopOpacity: 0 },
        { offset: '33.3%', stopColor: '#f1f1f1', stopOpacity: 0 },
        { offset: '66.6%', stopColor: '#f1f1f1', stopOpacity: 0 },
        { offset: '66.6%', stopColor: '#373737', stopOpacity: 0 },
        { offset: '99%', stopColor: '#373737', stopOpacity: 0 },
      ]}
    />,
  ];

  // === Angles 2 === === ===
  public static angles2 = [
    <RectangleShape
      key="a"
      linearGradientCoords={{ x1: 0.695, y1: 0, x2: 0.305, y2: 1 }}
      gradient={[
        { offset: '0%', stopColor: '#363636', stopOpacity: 0.05 },
        { offset: '33.333%', stopColor: '#363636', stopOpacity: 0.05 },
        { offset: '33.333%', stopColor: '#555555', stopOpacity: 0.05 },
        { offset: '66.666%', stopColor: '#555555', stopOpacity: 0.05 },
        { offset: '66.666%', stopColor: '#FFFFFF', stopOpacity: 0.05 },
        { offset: '100%', stopColor: '#FFFFFF', stopOpacity: 0.05 },
      ]}
    />,
    <RectangleShape
      key="b"
      linearGradientCoords={{ x1: 0.073, y1: 0, x2: 0.927, y2: 1 }}
      gradient={[
        { offset: '0%', stopColor: '#515151', stopOpacity: 0.05 },
        { offset: '33.333%', stopColor: '#515151', stopOpacity: 0.05 },
        { offset: '33.333%', stopColor: '#EEEEEE', stopOpacity: 0.05 },
        { offset: '66.666%', stopColor: '#EEEEEE', stopOpacity: 0.05 },
        { offset: '66.666%', stopColor: '#202020', stopOpacity: 0.05 },
        { offset: '100%', stopColor: '#202020', stopOpacity: 0.05 },
      ]}
    />,
    <RectangleShape
      key="c"
      linearGradientCoords={{ x1: 0.357, y1: 0, x2: 0.643, y2: 1 }}
      gradient={[
        { offset: '0%', stopColor: '#C0C0C0', stopOpacity: 0.05 },
        { offset: '33.333%', stopColor: '#C0C0C0', stopOpacity: 0.05 },
        { offset: '33.333%', stopColor: '#6D6D6D', stopOpacity: 0.05 },
        { offset: '66.666%', stopColor: '#6D6D6D', stopOpacity: 0.05 },
        { offset: '66.666%', stopColor: '#1E1E1E', stopOpacity: 0.05 },
        { offset: '100%', stopColor: '#1E1E1E', stopOpacity: 0.05 },
      ]}
    />,
    <RectangleShape
      key="d"
      linearGradientCoords={{ x1: 0.475, y1: 0, x2: 0.525, y2: 1 }}
      gradient={[
        { offset: '0%', stopColor: '#4D4D4D', stopOpacity: 0.05 },
        { offset: '33.333%', stopColor: '#4D4D4D', stopOpacity: 0.05 },
        { offset: '33.333%', stopColor: '#373737', stopOpacity: 0.05 },
        { offset: '66.666%', stopColor: '#373737', stopOpacity: 0.05 },
        { offset: '66.666%', stopColor: '#919191', stopOpacity: 0.05 },
        { offset: '100%', stopColor: '#919191', stopOpacity: 0.05 },
      ]}
    />,
  ];

  // === Angles 3 === === ===
  public static angles3 = [
    <RectangleShape
      key="a"
      linearGradientCoords={{ x1: 0, y1: 0, x2: 1, y2: 0.8 }}
      gradient={[
        { offset: '0%', stopColor: '#6B6B6B', stopOpacity: 0.04 },
        { offset: '8%', stopColor: '#6B6B6B', stopOpacity: 0.04 },
        { offset: '8%', stopColor: '#1F1F1F', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#1F1F1F', stopOpacity: 0.04 },
      ]}
    />,
    <RectangleShape
      key="b"
      linearGradientCoords={{ x1: 0, y1: 1, x2: 1, y2: 0.8 }}
      gradient={[
        { offset: '0%', stopColor: '#E4E4E4', stopOpacity: 0.04 },
        { offset: '62%', stopColor: '#E4E4E4', stopOpacity: 0.04 },
        { offset: '62%', stopColor: '#363636', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#363636', stopOpacity: 0.04 },
      ]}
    />,
    <RectangleShape
      key="c"
      linearGradientCoords={{ x1: 0, y1: 0, x2: 0.8, y2: 1 }}
      gradient={[
        { offset: '0%', stopColor: '#121212', stopOpacity: 0.04 },
        { offset: '37%', stopColor: '#121212', stopOpacity: 0.04 },
        { offset: '37%', stopColor: '#E9E9E9', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#E9E9E9', stopOpacity: 0.04 },
      ]}
    />,
    <RectangleShape
      key="d"
      linearGradientCoords={{ x1: 0.8, y1: 1, x2: 0, y2: 0 }}
      gradient={[
        { offset: '0%', stopColor: '#C9C9C9', stopOpacity: 0.04 },
        { offset: '55%', stopColor: '#C9C9C9', stopOpacity: 0.04 },
        { offset: '55%', stopColor: '#2F2F2F', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#2F2F2F', stopOpacity: 0.04 },
      ]}
    />,
    <RectangleShape
      key="e"
      linearGradientCoords={{ x1: 0.5, y1: 1, x2: 0.5, y2: 0 }}
      gradient={[
        { offset: '0%', stopColor: '#ACACAC', stopOpacity: 0.04 },
        { offset: '33%', stopColor: '#ACACAC', stopOpacity: 0.04 },
        { offset: '33%', stopColor: '#1A1A1A', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#1A1A1A', stopOpacity: 0.04 },
      ]}
    />,
    <RectangleShape
      key="f"
      linearGradientCoords={{ x1: 0.3, y1: 0, x2: 1, y2: 0.7 }}
      gradient={[
        { offset: '0%', stopColor: '#0B0B0B', stopOpacity: 0.04 },
        { offset: '38%', stopColor: '#0B0B0B', stopOpacity: 0.04 },
        { offset: '38%', stopColor: '#575757', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#575757', stopOpacity: 0.04 },
      ]}
    />,
    <RectangleShape
      key="g"
      linearGradientCoords={{ x1: 0, y1: 0.9, x2: 1, y2: 0 }}
      gradient={[
        { offset: '0%', stopColor: '#C7C7C7', stopOpacity: 0.04 },
        { offset: '69%', stopColor: '#C7C7C7', stopOpacity: 0.04 },
        { offset: '69%', stopColor: '#040404', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#040404', stopOpacity: 0.04 },
      ]}
    />,
    <RectangleShape
      key="h"
      linearGradientCoords={{ x1: 0.3, y1: 1, x2: 0.7, y2: 0 }}
      gradient={[
        { offset: '0%', stopColor: '#242424', stopOpacity: 0.04 },
        { offset: '20%', stopColor: '#242424', stopOpacity: 0.04 },
        { offset: '20%', stopColor: '#5B5B5B', stopOpacity: 0.04 },
        { offset: '100%', stopColor: '#5B5B5B', stopOpacity: 0.04 },
      ]}
    />,
  ];
}
