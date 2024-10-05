const base = {
    get() {
        return {
            url : "http://localhost:8080/gongsizichan/",
            name: "gongsizichan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gongsizichan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "公司资产网站"
        } 
    }
}
export default base
