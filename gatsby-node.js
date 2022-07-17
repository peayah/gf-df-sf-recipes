


exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions

    const result = await graphql(`
        query GetRecipes {
            allContentfulRecipies {
                nodes {
                    content {
                        tags
                    }
                }
            }
        }
    `)

}