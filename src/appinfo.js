// 'extend' needed so that there's no conflict with existing Query types
const typeDefs = [`
	extend type Query {
		appInfo: AppInfo
	}
	type AppInfo {
		name: String,
		version: String
	}
`];

var resolvers = {
	Query: {
		// $NoFlow
		appInfo(root) {
			// Potential security issue
			return {
				name: process.env.npm_package_name,
				version: process.env.npm_package_version
			}
		}
	}
};

// Export typeDefs & resolvers to be combined into one schema along with others
module.exports = {
  typeDefs,
  resolvers
};