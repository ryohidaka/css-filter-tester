// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string) => {
	// Convert the first character to uppercase and concatenate it with the rest of the original string.
	return str.charAt(0).toUpperCase() + str.slice(1);
};
