'use strict';

const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
} = GraphQL;


const PostType = new GraphQL.GraphQLObjectType({
	name: 'Post',
	description: 'Post Type, For all the posts present in Reddit.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the post',
		},
		title: {
			type: GraphQLString,
			description: 'Title of the post',
		},
		url: {
			type: GraphQLString,
			description: 'URL of the post',
		},

		author: {
			type: GraphQLString,
			description: 'Name of the Author who created this post',
		},

		ups: {
			type: GraphQLInt,
			description: 'Total number of Upvotes received for this post',
		},
		downs: {
			type: GraphQLString,
			description: 'Total number of Downvotes received for this post',
		},
		content: {
			type: GraphQLString,
			description: 'Markdown content of the post',
		}

	})

});


module.exports = PostType;

