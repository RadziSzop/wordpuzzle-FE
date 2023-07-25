import React, { forwardRef } from "react";

const Component = forwardRef((props, ref) => <div ref={ref} />);

const MotionComponent = motion(Component);
