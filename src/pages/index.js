import React from "react";
import theme from "theme";
import { Theme, Link, Image, Span, Text, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Image
			src="https://uploads.quarkly.io/633ea499fedca4001e3649b6/images/ms-excel-logo.png?v=2022-10-06T09:50:57.027Z"
			display="block"
			object-fit="cover"
			height="fit-content"
			width="fit-content"
			max-height="fit-content"
			max-width="fit-content"
		/>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline2" md-font="--headline2" margin="20px 0 0 0">
				<Span font-weight="normal">
					Payment Invoice.xlsx
				</Span>
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				INVOICE DATE: OCT 06, 2022
				<br />
				INOVICE NUMBER: 3218093-IN
				<br />
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				/>
				{" "}
			</Text>
			<Button />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"633ea499fedca4001e3649b4"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});