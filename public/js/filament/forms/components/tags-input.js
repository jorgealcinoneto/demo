function t({state:e}){return{newTag:"",state:e,createTag:function(){if(this.newTag=this.newTag.trim(),this.newTag!==""){if(this.state.includes(this.newTag)){this.newTag="";return}this.state.push(this.newTag),this.newTag=""}},deleteTag:function(n){this.state=this.state.filter(i=>i!==n)}}}export{t as default};
