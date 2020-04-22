import React from 'react';
import { Tag } from "baseui/tag";

function CompleteTag({ isActive }) {
	return (
		<Tag
			closeable={false}
			kind={isActive ? "positive" : "negative"}
			overrides={{
				Root: {
					style: ({ $theme }) => {
						return { marginLeft: "-7px" };
					},
				}
			}}
		>
			{isActive ? "Complete" : "Uncompleted"}
		</Tag>
	);
}

export default CompleteTag;