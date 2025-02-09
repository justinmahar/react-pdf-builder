import type { Meta, StoryObj } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Alert, Button, Card, Form, Spinner } from 'react-bootstrap';
import { HeadingProps } from '../../components/typography/Heading';
import OpenAI from 'openai';
import { useLocalStorage } from 'react-storage-complete';
import copy from 'copy-to-clipboard';

const StoryComponent = (props: HeadingProps) => {
  const [apiKey, setApiKey] = useLocalStorage('openAiApiKey', '');
  const [showApiKey, setShowApiKey] = React.useState(false);
  const [modelId, setModelId] = useLocalStorage('openAiModelId', 'gpt-4o');
  const [testing, setTesting] = React.useState(false);
  const [testError, setTestError] = React.useState<any>(undefined);
  const [successful, setSuccessful] = React.useState(false);
  const [css, setCss] = useLocalStorage('css', '');
  const [generationError, setGenerationError] = React.useState<any>(undefined);
  const [generating, setGenerating] = React.useState(false);
  const [component, setComponent] = useLocalStorage('component', '');
  const [copied, setCopied] = React.useState(false);

  const createOpenAIClient = () => {
    const client = new OpenAI({
      apiKey: apiKey ?? '',
      dangerouslyAllowBrowser: true,
    });
    return client;
  };

  const handleTest = () => {
    setSuccessful(false);
    setTestError(undefined);
    setTesting(true);
    try {
      const client = createOpenAIClient();
      client.chat.completions
        .create({
          messages: [{ role: 'user', content: 'Say the word test' }],
          model: modelId ?? '',
        })
        .then((chatCompletion) => {
          console.log(chatCompletion.choices[0]);
          setSuccessful(true);
        })
        .catch((e) => setTestError(e))
        .finally(() => setTesting(false));
    } catch (e) {
      setTestError(e);
      setTesting(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setCss(text);
    } catch (err) {
      setGenerationError(err);
    }
  };

  const handleGenerate = async () => {
    setComponent('');
    setGenerationError(undefined);
    setGenerating(true);
    try {
      const content = prompt + '\n\n' + css;
      const client = createOpenAIClient();
      const stream = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content }],
        stream: true,
      });
      let message = '';
      for await (const chunk of stream) {
        message += chunk.choices[0]?.delta?.content || '';
        setComponent(message.replace('```ts', '').replace('```typescript', '').replace('```', '').trim());
      }
      setGenerating(false);
    } catch (e) {
      setGenerationError(e);
      setGenerating(false);
    }
  };

  const handleCopy = () => {
    copy(component ?? '');
    setCopied(true);
  };

  React.useEffect(() => {
    let timeout: any = undefined;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div>
      <Card>
        <Card.Header>Backdrop Generator</Card.Header>
        <Card.Body className="d-flex flex-column gap-3">
          <Card.Text>
            You can generate React PDF Builder backdrops from CSS gradients (such as those found at{' '}
            <a href="https://www.gradientmagic.com/" target="_blank" rel="noreferrer">
              gradientmagic.com
            </a>
            ) using this AI-powered tool.
          </Card.Text>
          <Card.Text>
            You will need to provide an{' '}
            <a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer">
              OpenAI API key
            </a>{' '}
            in order to use this tool.
          </Card.Text>
          <Card>
            <Card.Header>OpenAI Settings</Card.Header>
            <Card.Body className="d-flex flex-column gap-2">
              {successful && (
                <Alert variant="success" className="mb-1" dismissible onClose={() => setSuccessful(false)}>
                  Your API key is working as expected!
                </Alert>
              )}
              {testError && (
                <Alert variant="danger" className="mb-1" dismissible onClose={() => setTestError(undefined)}>
                  {`${testError}`}
                </Alert>
              )}
              <Form.Group controlId="api-key-group" className="d-flex flex-column">
                <div className="d-flex gap-1">
                  <Form.Control
                    type={showApiKey ? 'text' : 'password'}
                    placeholder="Paste OpenAI API key"
                    value={apiKey ?? ''}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                  <Button variant="secondary" onClick={() => setShowApiKey(!showApiKey)}>
                    {showApiKey ? 'Hide' : 'Show'}
                  </Button>
                </div>
                <Form.Text className="text-muted">
                  Get an{' '}
                  <a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer">
                    API key here
                  </a>
                  .
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="model-id-group">
                <Form.Control
                  type="text"
                  placeholder="Enter a model ID"
                  value={modelId ?? ''}
                  onChange={(e) => setModelId(e.target.value)}
                />
                <div className="d-flex justify-content-between">
                  <Form.Text className="text-muted">
                    See all available <a href="https://platform.openai.com/docs/models#current-model-aliases">models</a>
                    .
                  </Form.Text>
                  <div className="my-1">
                    <Button variant="secondary" size="sm" onClick={handleTest} disabled={testing}>
                      {testing && <Spinner animation="border" role="status" size="sm" />} Test
                    </Button>
                  </div>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between gap-3">
              CSS Gradient Styles
              <div className="d-flex gap-1">
                <Button variant="outline-secondary" size="sm" onClick={() => setCss('')}>
                  Clear
                </Button>
                <Button variant="secondary" size="sm" onClick={handlePaste}>
                  Paste
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              {generationError && (
                <Alert variant="danger" className="mb-1" dismissible onClose={() => setGenerationError(undefined)}>
                  {`${generationError}`}
                </Alert>
              )}
              <Card.Text>
                Paste your background CSS below and click Generate to create a React PDF Backdrop component that
                approximates the CSS styles.
              </Card.Text>
              <div className="d-flex flex-column gap-2">
                <Form.Control
                  as="textarea"
                  className="font-monospace"
                  style={{ fontSize: '80%' }}
                  placeholder="Paste your background CSS here"
                  rows={4}
                  value={css ?? ''}
                  onChange={(e) => setCss(e.target.value)}
                />
                <div className="d-flex justify-content-end">
                  <Button variant="primary" onClick={handleGenerate} disabled={!css?.trim() || generating}>
                    {generating && <Spinner animation="border" role="status" size="sm" />} Generate
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          {component && (
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center gap-3">
                React PDF Backdrop Component{' '}
                <div className="d-flex gap-1">
                  <Button variant="outline-secondary" size="sm" onClick={() => setComponent('')}>
                    Clear
                  </Button>
                  <Button variant="primary" size="sm" onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </Card.Header>
              <Card.Body className="font-monospace small bg-dark text-light">
                <Card.Text>
                  <pre>
                    {component}
                    {generating && '|'}
                  </pre>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Tools/Backdrops', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const BackdropGenerator: Story = {
  args: {},
};

const prompt = `
Important information:

We are working with a React PDF library that supports backdrops. You have a GradientBackdrop component with the following interface:

\`\`\`ts
export interface GradientBackdropProps extends BoxProps {
  size: PageSizeString | { width: number; height: number };
  orientation?: 'portrait' | 'landscape';
  gradient: string[] | GradientStop[];
  gradientType?: GradientType;
}

export interface GradientStop {
  offset: string | number;
  stopColor: string;
  stopOpacity?: string | number;
}

export enum GradientType {
  leftToRight = 'leftToRight',
  rightToLeft = 'rightToLeft',
  topToBottom = 'topToBottom',
  bottomToTop = 'bottomToTop',
  topLeftToBottomRight = 'topLeftToBottomRight',
  bottomLeftToTopRight = 'bottomLeftToTopRight',
  bottomRightToTopLeft = 'bottomRightToTopLeft',
  topRightToBottomLeft = 'topRightToBottomLeft',
  radial = 'radial',
}

// Color scheme swatches, use key names for swatch prop.
export const swatches = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  white: '#ffffff',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#000000',
};

\`\`\`

Using this component, you can create various gradients by defining gradient stops. For example, the following has a gradient background with a diagonal overlay and another overlay of a circle in the middle:

\`\`\`ts
import React from 'react';
import { Box, BoxProps, PageSizeString, GradientStop, GradientType, RectangleShape, Backdrops } from 'react-pdf-builder';

export interface CustomBackdropProps extends BoxProps {
  size: PageSizeString | { width: number; height: number };
  orientation?: 'portrait' | 'landscape';
  gradient?: string[] | GradientStop[];
}

export const CustomBackdrop = ({
  size,
  orientation,
  gradient = ['#09C9BA', '#1283DD'],
  ...props
}: CustomBackdropProps) => {
  const d = Backdrops.getDimensions(size, orientation);
  const width = d.width;
  const height = d.height;
  return (
    <Box {...props} style={{ position: 'absolute', ...props.style }}>
      {/* Background gradient */}
      <RectangleShape
        style={{ position: 'absolute' }}
        width={width}
        height={height}
        gradientType={GradientType.topLeftToBottomRight}
        gradient={gradient}
      />
      {/* Overlays */}
      <RectangleShape
        style={{ position: 'absolute' }}
        width={width}
        height={height}
        gradientType={GradientType.bottomLeftToTopRight}
        gradient={[
          { offset: '0%', stopColor: '#000000', stopOpacity: 0.1 },
          { offset: '10%', stopColor: '#000000', stopOpacity: 0.1 },
          { offset: '10%', stopColor: '#000000', stopOpacity: 0.05 },
          { offset: '50%', stopColor: '#000000', stopOpacity: 0.05 },
          { offset: '50%', stopColor: '#000000', stopOpacity: 0 },
          { offset: '90%', stopColor: '#000000', stopOpacity: 0.02 },
          { offset: '100%', stopColor: '#000000', stopOpacity: 0.02 },
        ]}
      />
      <RectangleShape
        style={{ position: 'absolute' }}
        width={width}
        height={height}
        gradientType={GradientType.radial}
        gradient={[
          { offset: '0%', stopColor: '#000000', stopOpacity: 0.03 },
          { offset: '30%', stopColor: '#000000', stopOpacity: 0.03 },
          { offset: '30%', stopColor: '#000000', stopOpacity: 0 },
          { offset: '100%', stopColor: '#000000', stopOpacity: 0 },
        ]}
        radialGradientProps={{
          cx: 0.5,
          cy: 0.5,
        }}
      />
    </Box>
  );
};
\`\`\`

The gradients use hard stops to create defined edges. As you can see, we can layer them by placing them one after the other. A gradient type can be specified, which will determine the direction. You can also define radial gradients, too. So you can create circles if you want by using hard stops with that, too.

RectangleShape takes the following additional props, should you want to define a custom direction for linear gradients (x1, y1, x2, y2) or a custom location for the radial gradient (x, y), any of which can be outside the bounds of the visible area (0 to 1) if need be: 
\`\`\`ts
linearGradientCoords?: { x1: number; y1: number; x2: number; y2: number };
radialGradientCoords?: { x: number; y: number };
\`\`\`

Use these when \`GradientType\` is not sufficient. For reference, this is how the linear GradientType is translated to linear gradient coordinates:

\`\`\`ts
  public static toGradientCoords(gradientType: GradientType) {
    const leftToRight = { x1: 0, y1: 0.5, x2: 1, y2: 0.5 };
    let gradientCoords = leftToRight;
    switch (gradientType) {
      case GradientType.rightToLeft:
        gradientCoords = { x1: 1, y1: 0.5, x2: 0, y2: 0.5 };
        break;
      case GradientType.topToBottom:
        gradientCoords = { x1: 0.5, y1: 0, x2: 0.5, y2: 1 };
        break;
      case GradientType.bottomToTop:
        gradientCoords = { x1: 0.5, y1: 1, x2: 0.5, y2: 0 };
        break;
      case GradientType.topLeftToBottomRight:
        gradientCoords = { x1: 0, y1: 0, x2: 1, y2: 1 };
        break;
      case GradientType.topRightToBottomLeft:
        gradientCoords = { x1: 1, y1: 0, x2: 0, y2: 1 };
        break;
      case GradientType.bottomLeftToTopRight:
        gradientCoords = { x1: 0, y1: 1, x2: 1, y2: 0 };
        break;
      case GradientType.bottomRightToTopLeft:
        gradientCoords = { x1: 1, y1: 1, x2: 0, y2: 0 };
        break;
    }
    return gradientCoords;
  }
\`\`\`

What I'd like to do next is to convert existing background gradient CSS into a component called CustomBackdrop. I'll give you the background CSS, and you port the styles as best as you can to the React format I'm using above, with that format for defining gradient stops, and layering them as shown above.

Here's the starting component. Fill this out with the result:

\`\`\`ts
import React from 'react';
import { Box, BoxProps, PageSizeString, GradientStop, GradientType, RectangleShape, Backdrops } from 'react-pdf-builder';

export interface CustomBackdropProps extends BoxProps {
  size: PageSizeString | { width: number; height: number };
  orientation?: 'portrait' | 'landscape';
  gradient?: string[] | GradientStop[];
}

export const CustomBackdrop = ({
  size,
  orientation,
  gradient = ['#09C9BA', '#1283DD'],
  ...props
}: CustomBackdropProps) => {
  const d = Backdrops.getDimensions(size, orientation);
  const width = d.width;
  const height = d.height;
  return (
    <Box {...props} style={{ position: 'absolute', ...props.style }}>
      {/* RectangleShape components go here -- First RectangleShape must use the gradient prop */}
    </Box>
  );
};
\`\`\`

Instructions:
- You are to port the provided CSS to the component format shown above.
- Reply with the React TypeScript code only and no other commentary.
- DO NOT REPLY IN MARKDOWN. Reply in raw code only.
- Put any solid gradients with opacity of 1 first. Overlays should follow below that.
- Only use RGB hex values for colors (no alpha channel). For transparency/alpha, use the stop opacity. There is no color called "transparent", use \`"#000000"\` with \`stopOpacity\` 0 instead. Remember that opacity of 0 means it's not visible. So be sure to only set that to 0 to create gaps. Make sure the parts we want visible are actually visible!
- The first gradient must use the gradient prop so the user can customize it. Use a default value of colors that are closest to the ones in the CSS.
- Reply with the code for the entire file, including imports.

Here's the CSS to port:
`;
