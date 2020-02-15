```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label, Radio, Range } = require('@zendeskgarden/react-forms/src');

const BasicExample = () => {
  const [compact, setCompact] = React.useState(false);
  const [orientation, setOrientation] = React.useState('vertical');
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Grid>
      <Row>
        <Col>
          <Well isRecessed style={{ width: 300 }}>
            <Field>
              <Label>Text</Label>
              <Input
                isCompact
                value={state.text}
                onChange={event => setState({ text: event.target.value })}
              />
            </Field>
            <Field className="u-mt-xs">
              <Toggle
                checked={state.compact}
                onChange={event => setState({ compact: event.target.checked })}
              >
                <Label>Orientation</Label>
              </Toggle>
            </Field>
            <Field>
              <Radio
                name="alert-type"
                value="horizontal"
                checked={orientation === 'horizontal'}
                onChange={event => {
                  setOrientation(event.target.value);
                }}
              >
                <Label isRegular>Horizontal</Label>
              </Radio>
            </Field>
            <Field>
              <Radio
                name="alert-type"
                value="vertical"
                checked={orientation === 'vertical'}
                onChange={event => {
                  setOrientation(event.target.value);
                }}
              >
                <Label isRegular>Vertical</Label>
              </Radio>
            </Field>
            <Field>
              <Label>Active Step</Label>
              <Range
                max={3}
                onChange={event => {
                  setActiveStep(parseInt(event.target.value, 10));
                }}
                value={state.activeStep}
              />
            </Field>
          </Well>
        </Col>
        <Col>
          <Stepper activeStep={activeStep} orientation={orientation}>
            <Step isCompleted={false}>
              <StepLabel>Label 1</StepLabel>
              <StepContent>
                <div>
                  Veggie ipsum ggie ipsum ggie ipsum ipsum ggie ipsum ggie ipsum ipsum ggie ipsum
                </div>
                <Field>
                  <Label>Text</Label>
                  <Input isCompact />
                </Field>
              </StepContent>
            </Step>
            <Step isCompleted={false}>
              <StepLabel>Label 2</StepLabel>
              <StepContent>
                <div>Content</div>
                <div>
                  Veggie ipsum ggie ipsum ggie ipsum ipsum ggie ipsum ggie ipsum ipsum ggie ipsum
                </div>
              </StepContent>
            </Step>
            <Step isCompleted={false}>
              <StepLabel>Label 3</StepLabel>
              <StepContent>Content</StepContent>
            </Step>
          </Stepper>
          {activeStep === 0 ? (
            <div>
              <div>Content</div>
              <div>
                Veggie ipsum ggie ipsum ggie ipsum ipsum ggie ipsum ggie ipsum ipsum ggie ipsum
              </div>
            </div>
          ) : null}
        </Col>
      </Row>
    </Grid>
  );
};

<BasicExample />;
```
