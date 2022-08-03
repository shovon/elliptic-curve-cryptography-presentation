import React from "react";
import {
	FlexBox,
	Heading,
	SpectacleLogo,
	UnorderedList,
	CodeSpan,
	OrderedList,
	ListItem,
	FullScreen,
	AnimatedProgress,
	Appear,
	Slide,
	Deck,
	Text,
	Grid,
	Box,
	Image,
	CodePane,
	MarkdownSlide,
	MarkdownSlideSet,
	Notes,
	SlideLayout,
} from "spectacle";
import ReactDOM from "react-dom";
import Katex from "./Katex";

const formidableLogo =
	"https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

// SPECTACLE_CLI_THEME_START
const theme = {
	fonts: {
		header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
		text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
	},
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
	<FlexBox
		justifyContent="space-between"
		position="absolute"
		bottom={0}
		width={1}
	>
		<Box padding="0 1em">
			<FullScreen />
		</Box>
		<Box padding="1em">
			<AnimatedProgress />
		</Box>
	</FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
	<>
		<Slide>
			<Text>This is a slide fragment.</Text>
		</Slide>
		<Slide>
			<Text>This is also a slide fragment.</Text>
			<Appear>
				<Text>This item shows up!</Text>
			</Appear>
			<Appear>
				<Text>This item also shows up!</Text>
			</Appear>
		</Slide>
	</>
);

const boringTransition = {
	from: {
		opacity: 1,
	},
	enter: {},
	leave: {
		opacity: 1,
	},
};

const App = () => (
	<Deck theme={theme} template={template}>
		<Slide transition={boringTransition}>
			<FlexBox height="100%" flexDirection="column">
				<Heading margin="0px" fontSize="150px">
					✨<i>Spectacle</i> ✨
				</Heading>
				<Heading margin="0px" fontSize="h2">
					A ReactJS Presentation Library
				</Heading>
				<Heading margin="0px 32px" color="primary" fontSize="h3">
					Where you can write your decks in JSX, Markdown, or MDX!
				</Heading>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%">
				<Text>
					<Katex latex={`y^2 = x^3 + ax + b`} />
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%">
				<Text>
					<Katex latex={`\\Delta = \\dfrac{y_2 - y_1}{x_2 - x_1}`} />
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%">
				<Text>
					<Katex latex={`y_1 = \\Delta x_1 + \\mu`} />
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              y_1 &= &\\Delta x_1 &+ \\mu \\\\
              -\\Delta x_1  &  &-\\Delta x_1&
              \\end{aligned}
            `}
					/>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              y_1 &= & \\cancel{\\Delta x_1} &+ \\mu \\\\
              -\\Delta x_1  &  &\\cancel{-\\Delta x_1}&
              \\end{aligned}
            `}
					/>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%">
				<Text>
					<Katex latex={`y_1 - \\Delta x_1 = \\mu`} />
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              y = \\Delta x + \\mu
              \\end{aligned}
            `}
					/>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              &y &= &\\Delta x + \\mu\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + \\mu)^2
              \\end{aligned}
            `}
					/>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%" flexDirection="row">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              &y &= &\\Delta x + \\mu\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + \\mu)^2\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + \\mu)^2 = x^3 + ax + b\\\\
              \\end{aligned}
            `}
					/>

					<Katex
						latex={`
              \\begin{aligned}
              \\Rightarrow &(\\Delta x + \\mu)^2 = x^3 + ax + b
              \\end{aligned}
            `}
					></Katex>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%" flexDirection="row">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              &y &= &\\Delta x + b\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2 = x^3 + ax + b\\\\
              \\end{aligned}
            `}
					/>

					<Katex
						latex={`
              \\begin{aligned}
              &\\Rightarrow &(\\Delta x + \\mu)^2 &=& x^3 + ax + b\\\\
              &\\Rightarrow &(\\Delta x + \\mu)^2 &=& x^3 + ax + b\\\\
              &&-(\\Delta x + \\mu)^2 & &-(\\Delta x + \\mu)^2
              \\end{aligned}
            `}
					></Katex>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%" flexDirection="row">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              &y &= &\\Delta x + b\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2 = x^3 + ax + b\\\\
              \\end{aligned}
            `}
					/>

					<Katex
						latex={`
              \\begin{aligned}
              &\\Rightarrow &(\\Delta x + \\mu)^2 &=& x^3 + ax + b\\\\
              &\\Rightarrow &\\cancel{(\\Delta x + \\mu)^2} &=& x^3 + ax + b\\\\
              &&\\cancel{-(\\Delta x + \\mu)^2} & &-(\\Delta x + \\mu)^2
              \\end{aligned}
            `}
					></Katex>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%" flexDirection="row">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              &y &= &\\Delta x + b\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2 = x^3 + ax + b\\\\
              \\end{aligned}
            `}
					/>

					<Katex
						latex={`
              \\begin{aligned}
              &\\Rightarrow &(\\Delta x + \\mu)^2 &= x^3 + ax + b\\\\
              &\\Rightarrow &0 &= x^3 + ax + b -(\\Delta x + \\mu)^2
              \\end{aligned}
            `}
					></Katex>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%" flexDirection="row">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              &y &= &\\Delta x + b\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2 = x^3 + ax + b\\\\
              \\end{aligned}
            `}
					/>

					<Katex
						latex={`
              \\begin{aligned}
              &\\Rightarrow &(\\Delta x + \\mu)^2 &= x^3 + ax + b\\\\
              &\\Rightarrow &0 &= x^3 + ax + b -(\\Delta x + \\mu)^2
              \\end{aligned}
            `}
					></Katex>

					<Katex
						latex={`
              \\begin{aligned}
              \\Rightarrow 0 = x^3 + ax + b - \\Delta x^2 - 2 \\Delta x \\mu - \\mu&^2
              \\end{aligned}
            `}
					></Katex>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<FlexBox height="100%" flexDirection="row">
				<Text>
					<Katex
						latex={`
              \\begin{aligned}
              &y &= &\\Delta x + b\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2\\\\
              \\Rightarrow &y^2 &= &(\\Delta x + b)^2 = x^3 + ax + b\\\\
              \\end{aligned}
            `}
					/>

					<Katex
						latex={`
              \\begin{aligned}
              &\\Rightarrow &(\\Delta x + \\mu)^2 &= x^3 + ax + b\\\\
              &\\Rightarrow &0 &= x^3 + ax + b -(\\Delta x + \\mu)^2
              \\end{aligned}
            `}
					></Katex>

					<Katex
						latex={`
              \\begin{aligned}
              &\\Rightarrow 0 = x^3 + ax + b - \\Delta x^2 - 2 \\Delta x \\mu - \\mu^2\\\\
              &\\Rightarrow 0 = x^3 - \\Delta x^2 + x(a + 2\\Delta \\mu) + (b - \\mu^2)
              \\end{aligned}
            `}
					></Katex>
				</Text>
			</FlexBox>
		</Slide>
		<Slide transition={boringTransition}>
			<Heading>Vieta's Formula!</Heading>
			<Appear>
				<Text>
					<Katex
						latex={`
                \\begin{aligned}
                & & & 0 = x^3 - \\Delta x^2 + x(a + 2\\Delta \\mu) + (b - \\mu^2)\\\\
                & \\Rightarrow & & \\Delta = x_1 + x_2 + x_3\\\\
                & \\Rightarrow & & \\Delta - x_1 - x2 = x_3
                \\end{aligned}
              `}
					></Katex>
				</Text>
			</Appear>
		</Slide>
		<Slide transition={boringTransition}>
			<Heading>Vieta's Formula!</Heading>
			<Text>
				<Katex
					latex={`
                \\begin{aligned}
                & & & 0 = x^3 - \\Delta x^2 + x(a + 2\\Delta \\mu) + (b - \\mu^2)\\\\
                & \\Rightarrow & & \\Delta = x_1 + x_2 + x_3\\\\
                & \\Rightarrow & & \\Delta - x_1 - x2 = x_3\\\\
                & \\Rightarrow & & -y_3 = \\Delta x_3 + \\mu
                \\end{aligned}
              `}
				></Katex>
			</Text>
		</Slide>
		<Slide transition={boringTransition}>
			<Heading>Vieta's Formula!</Heading>
			<Text>
				<Katex
					latex={`
                \\begin{aligned}
                & & & 0 = x^3 - \\Delta x^2 + x(a + 2\\Delta \\mu) + (b - \\mu^2)\\\\
                & \\Rightarrow & & \\Delta = x_1 + x_2 + x_3\\\\
                & \\Rightarrow & & \\Delta - x_1 - x2 = x_3\\\\
                & \\Rightarrow & & -y_3 = \\Delta x_3 + \\mu\\\\
                & \\Rightarrow & & -y_3 = \\Delta x_3 + y_1 - \\Delta x_1\\\\
                \\end{aligned}
              `}
				></Katex>
			</Text>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>What if P1 = P2?</Heading>
			<Appear>
				<Text>We use calculus</Text>
			</Appear>
			<Appear>
				<Text>
					<Katex
						latex={`
                \\begin{aligned}
                \\dfrac{dy^2}{dx} = \\dfrac{d}{dx}(x^3 + ax + b)
                \\end{aligned}
              `}
					></Katex>
				</Text>
			</Appear>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>What if P1 = P2?</Heading>
			<Text>We use calculus</Text>
			<Text>
				<Katex
					latex={`
                \\begin{aligned}
                &\\dfrac{dy^2}{dx} = \\dfrac{d}{dx}(x^3 + ax + b)\\\\
                \\Rightarrow & \\dfrac{dy^2}{dy}\\dfrac{dy}{dx} = \\dfrac{dx^3}{dx} + \\dfrac{ax}{x} + \\dfrac{db}{dx}
                \\end{aligned}
              `}
				></Katex>
			</Text>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>What if P1 = P2?</Heading>
			<Text>We use calculus</Text>
			<Text>
				<Katex
					latex={`
                \\begin{aligned}
                &\\dfrac{dy^2}{dx} = \\dfrac{d}{dx}(x^3 + ax + b)\\\\
                \\Rightarrow & \\dfrac{dy^2}{dy}\\dfrac{dy}{dx} = \\dfrac{dx^3}{dx} + \\dfrac{ax}{x} + \\dfrac{db}{dx}\\\\
                \\Rightarrow & 2y\\dfrac{dy}{dx} = 3x^2 + a + 0
                \\end{aligned}
              `}
				></Katex>
			</Text>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>What if P1 = P2?</Heading>
			<Text>We use calculus</Text>
			<Text>
				<Katex
					latex={`
                \\begin{aligned}
                \\Rightarrow & 2y\\dfrac{dy}{dx} = 3x^2 + a + 0
                \\end{aligned}
              `}
				></Katex>
			</Text>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>What if P1 = P2?</Heading>
			<Text>We use calculus</Text>
			<Text>
				<Katex
					latex={`
                \\begin{aligned}
                \\Rightarrow & 2y\\dfrac{dy}{dx} = 3x^2 + a\\\\
                \\Rightarrow & \\dfrac{dy}{dx} = \\dfrac{3x^2 + a}{y^2}
                \\end{aligned}
              `}
				></Katex>
			</Text>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>Some Basic rules</Heading>
			<Appear>
				<Text>There exists an identity element, which is denoted as 0</Text>
			</Appear>
			<Appear>
				<Text>
					<Katex latex={`P - P = 0`} />
				</Text>
			</Appear>
			<Appear>
				<Text>
					<Katex latex={`0 + P = P`} />
				</Text>
			</Appear>
			<Appear>
				<Text>
					<Katex latex={`P1 + P2 = P2 + P1`} />
				</Text>
			</Appear>

			<Appear>
				<Text>
					<Katex latex={`(P1 + P2) + P3 = P1 + (P2 + P3)`} />
				</Text>
			</Appear>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>Some Basic rules (Continued)</Heading>
			<Appear>
				<Text>Let "n" be a non-zero positive integer</Text>
				<Text>
					<Katex latex={`nP = P + P + \\cdots + P`} />
				</Text>
			</Appear>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>Modular arithmetic</Heading>

			<Appear>
				<Text>
					<Katex
						latex={`(a\\ \\textrm{mod}\\ p) + (b\\ \\textrm{mod}\\ p) = (a + b)\\ \\textrm{mod}\\ p`}
					/>
				</Text>
			</Appear>

			<Appear>
				<Text>
					<Katex
						latex={`(a\\ \\textrm{mod} p) \\cdot (b\\ \\textrm{mod}\\ p) = (a \\cdot b)\\ \\textrm{mod}\\ p`}
					/>
				</Text>
			</Appear>

			<Appear>
				<Text>
					<Katex
						latex={`(a^c\\ \\textrm{mod}\\ p) \\cdot (b^c\\ \\textrm{mod}\\ p) = (a^c \\cdot b^d)\\ \\textrm{mod}\\ p`}
					/>
				</Text>
			</Appear>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>Therefore</Heading>

			<Appear>
				<Text>
					<Katex latex={`a + b \\equiv c\\ (\\textrm{mod}\\ p)`} />
				</Text>
			</Appear>

			<Appear>
				<Text>
					<Katex latex={`a \\cdot b = c\\ (\\textrm{mod}\\ p)`} />
				</Text>
			</Appear>

			<Appear>
				<Text>
					<Katex latex={`a^c \\cdot b^d = e\\ (\\textrm{mod}\\ p)`} />
				</Text>
			</Appear>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>Special Rules with Modular Arithmetic</Heading>

			<Appear>
				<Text>Modular inverse</Text>
				<Text>
					<Katex latex={`\\dfrac{1}{a} \\equiv a^{-1}\\ (\\textrm{mod}\\ p)`} />
				</Text>
				<Text>
					<Katex latex={`a \\cdot a^{-1} \\equiv 1\\ (\\textrm{mod}\\ p)`} />
				</Text>
			</Appear>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>Special Rules with Modular Arithmetic</Heading>

			<Appear>
				<Text>Modular square root</Text>
				<Text>
					<Katex latex={`\\dfrac{1}{a} \\equiv a^{-1}\\ (\\textrm{mod}\\ p)`} />
				</Text>
				<Text>
					<Katex latex={`a \\cdot a^{-1} \\equiv 1\\ (\\textrm{mod}\\ p)`} />
				</Text>
			</Appear>
		</Slide>

		<Slide transition={boringTransition}>
			<Heading>Generating a key</Heading>

			<OrderedList>
				<Appear>
					<ListItem>
						Pick a random number k between 0 to n (discussed later), and
						multiply the generator G (discussed later) with it
					</ListItem>
				</Appear>
				<Appear>
					<ListItem>
						<Katex latex={`kG`}></Katex>
					</ListItem>
				</Appear>
			</OrderedList>
		</Slide>

		<Slide
			transition={{
				from: {
					transform: "scale(0.5) rotate(45deg)",
					opacity: 0,
				},
				enter: {
					transform: "scale(1) rotate(0)",
					opacity: 1,
				},
				leave: {
					transform: "scale(0.2) rotate(315deg)",
					opacity: 0,
				},
			}}
			backgroundColor="tertiary"
			backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
			backgroundOpacity={0.5}
		>
			<Heading>Custom Backgrounds</Heading>
			<UnorderedList>
				<ListItem>
					<CodeSpan>backgroundColor</CodeSpan>
				</ListItem>
				<ListItem>
					<CodeSpan>backgroundImage</CodeSpan>
				</ListItem>
				<ListItem>
					<CodeSpan>backgroundOpacity</CodeSpan>
				</ListItem>
				<ListItem>
					<CodeSpan>backgroundSize</CodeSpan>
				</ListItem>
				<ListItem>
					<CodeSpan>backgroundPosition</CodeSpan>
				</ListItem>
				<ListItem>
					<CodeSpan>backgroundRepeat</CodeSpan>
				</ListItem>
			</UnorderedList>
		</Slide>
		<Slide>
			<Heading>Animated Elements</Heading>
			<OrderedList>
				<Appear>
					<ListItem>Elements can animate in!</ListItem>
				</Appear>
				<Appear>
					<ListItem>Out of order</ListItem>
				</Appear>
				<Appear priority={0}>
					<ListItem>
						Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
					</ListItem>
				</Appear>
			</OrderedList>
		</Slide>
		<Slide>
			<FlexBox>
				<Text>These</Text>
				<Text>Text</Text>
				<Text color="secondary">Items</Text>
				<Text fontWeight="bold">Flex</Text>
			</FlexBox>
			<Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
				<Box backgroundColor="primary">
					<Text color="secondary">Single-size Grid Item</Text>
				</Box>
				<Box backgroundColor="secondary">
					<Text>Double-size Grid Item</Text>
				</Box>
			</Grid>
			<Grid
				gridTemplateColumns="1fr 1fr 1fr"
				gridTemplateRows="1fr 1fr 1fr"
				gridRowGap={1}
			>
				{Array(9)
					.fill("")
					.map((_, index) => (
						<FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
							<Image src={formidableLogo} width={100} />
						</FlexBox>
					))}
			</Grid>
		</Slide>
		<SlideFragments />
		<Slide>
			<CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';
        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });
        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
			<Box height={20} />
			<CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
		</Slide>
		<div>
			<Slide>
				<Heading>This is a slide embedded in a div</Heading>
			</Slide>
		</div>
		<MarkdownSlide componentProps={{ color: "yellow" }}>
			{`
        # This is a Markdown Slide
        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
		</MarkdownSlide>
		<MarkdownSlide animateListItems>
			{`
       # This is also a Markdown Slide
       It uses the \`animateListItems\` prop.
       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
		</MarkdownSlide>
		<Slide>
			<Grid
				gridTemplateColumns="50% 50%"
				gridTemplateRows="50% 50%"
				height="100%"
			>
				<FlexBox alignItems="center" justifyContent="center">
					<Heading>This is a 4x4 Grid</Heading>
				</FlexBox>
				<FlexBox alignItems="center" justifyContent="center">
					<Text textAlign="center">
						With all the content aligned and justified center.
					</Text>
				</FlexBox>
				<FlexBox alignItems="center" justifyContent="center">
					<Text textAlign="center">
						It uses Spectacle <CodeSpan>{"<Grid />"}</CodeSpan> and{" "}
						<CodeSpan>{"<FlexBox />"}</CodeSpan> components.
					</Text>
				</FlexBox>
				<FlexBox alignItems="center" justifyContent="center">
					<Box width={200} height={200} backgroundColor="secondary" />
				</FlexBox>
			</Grid>
		</Slide>
		<MarkdownSlideSet>
			{`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
		</MarkdownSlideSet>
		<SlideLayout.List
			title="Slide layouts!"
			items={["Two-column", "Lists", "And more!"]}
			animateListItems
		/>
	</Deck>
);

export default App;
