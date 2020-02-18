```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label, Radio, Range } = require('@zendeskgarden/react-forms/src');
const { Button } = require('@zendeskgarden/react-buttons/src');
const SmileyStrokeIcon = require('@zendeskgarden/svg-icons/src/16/smiley-stroke.svg').default;
const StarStrokeIcon = require('@zendeskgarden/svg-icons/src/16/star-stroke.svg').default;
const HomeStrokeIcon = require('@zendeskgarden/svg-icons/src/16/home-stroke.svg').default;



const BasicExample = () => {
  const [compact, setCompact] = React.useState(false);
  const [orientation, setOrientation] = React.useState('horizontal');
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState(new Set());

  const reset = () => {
    setCompletedSteps(new Set())
    setActiveStep(0)
    setOrientation('horizontal')
  }

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
              <Label>Drag to complete step ({activeStep + 1})</Label>
              <Range
                max={3}
                onChange={event => {
                  const nextStep = parseInt(event.target.value, 10)

                  if (completedSteps.has(nextStep)) {
                    const s = new Set(completedSteps)
                    s.delete(nextStep)
                    setCompletedSteps(s)
                  } else {
                    const s = new Set(completedSteps)
                    s.add(activeStep)
                    setCompletedSteps(s)
                  }

                  setActiveStep(nextStep);
                }}
                value={activeStep}
              />
            </Field>
            <button onClick={reset}>Reset</button>
          </Well>
        </Col>
        <Col>
          <Stepper activeStep={activeStep} orientation={orientation}>
            <Step icon={HomeStrokeIcon} label="Label 1" isCompleted={completedSteps.has(0)}>
              <StepContent>
                <div>
                  Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi.                
                </div>
                <Field>
                  <Label>Text</Label>
                  <Input isCompact />
                </Field>
              </StepContent>
            </Step>
            <Step icon={SmileyStrokeIcon} label="Label 2" isCompleted={completedSteps.has(1)}>
              <StepContent>
                <div>Content</div>
                <div>
                  Beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
                </div>
              </StepContent>
            </Step>
            <Step icon={StarStrokeIcon} label="Label 3" isCompleted={completedSteps.has(2)}>
              <StepContent>Content</StepContent>
            </Step>
          </Stepper>
          
          {orientation === 'horizontal' && activeStep === 0 ? (
            <div>
              <div>Content for Step 1</div>
              <div>
                Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi.                
              </div>
            </div>
          ) : null}
          {orientation === 'horizontal' && activeStep === 1 ? (
            <div>
              <div>Content for Step 2</div>
              <div>
                Veggie ipsum ggie ipsum ggie ipsum ipsum ggie ipsum ggie ipsum ipsum ggie ipsum.
              </div>
            </div>
          ) : null}
          {orientation === 'horizontal' && activeStep === 2 ? (
            <div>
              <div>Content for Step 3</div>
              <div>
                Beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              </div>
            </div>
          ) : null}

          <div className='button-bar' style={{
            display: 'flex',
            justifyContent: orientation === 'horizontal' ? 'center' : 'flex-end',
            marginTop: '12px'
          }}>
            <Button onClick={() => {
              if (activeStep > 0) {
                console.log(activeStep, '<-- activeStep')
                const s = new Set(completedSteps)
                s.delete(activeStep - 1)
                setCompletedSteps(s)
                setActiveStep(activeStep - 1)
              }
            }} isBasic>Back</Button>
            <Button onClick={() => {
              if (activeStep < 3) {
                const s = new Set(completedSteps)
                s.add(activeStep)
                setCompletedSteps(s)
                setActiveStep(activeStep + 1)
              }
            }} isPrimary>Next</Button>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

<BasicExample />;
```
