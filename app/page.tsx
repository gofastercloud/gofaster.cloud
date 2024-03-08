import React, { useState } from 'react';

interface Post {
	title: string;
	date: string;
	tags: string[];
	content: string;
}

const Page: React.FC = () => {
	const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

	const posts: Post[] = [
		{
			title: 'Post 1',
			date: '2022-01-01',
			tags: ['tag1', 'tag2'],
			content: 'This is the content of post 1',
		},
		{
			title: 'Post 2',
			date: '2022-02-01',
			tags: ['tag2', 'tag3'],
			content: 'This is the content of post 2',
		},
		{
			title: 'Post 3',
			date: '2022-03-01',
			tags: ['tag1', 'tag3'],
			content: 'This is the content of post 3',
		},
	];

	const filterByDate = (date: string) => {
		const filtered: Post[] = posts.filter((post) => post.date === date);
		setFilteredPosts(filtered);
	};

	const filterByTag = (tag: string) => {
		const filtered: Post[] = posts.filter((post) => post.tags.includes(tag));
		setFilteredPosts(filtered);
	};

	return (
		<div>
			{filteredPosts.map((post, index) => (
				<div key={index}>
					<h2>{post.title}</h2>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
};

export default Page;
