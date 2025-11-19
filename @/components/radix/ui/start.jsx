import { Theme } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function MyApp() {
	return (
    <Theme>
		<Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
        </Theme>
	);
}