// const products = []
const fs = require('fs')
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
const path = require('path')
const rootDir = require('../util/path')

const pathFormatter = (()=>path.join(rootDir, 'data', 'products.json'))

module.exports = class Product {
    constructor(title){
        this.title = title
    }
    
    save(){
        fs.readFile(pathFormatter(), (err, fileContent) => {
            let products = []
            if(!err){
                products = JSON.parse(fileContent)
                
            }
            products.push(this)
            fs.writeFile(pathFormatter(), JSON.stringify(products), err => {
                console.error(err)
            })
        })
    }

    static async fetchAll(){
        try {
            return await readFile(pathFormatter(),(err, fileContent) => {
                if(err){
                    return []
                }
                return fileContent
            })
        } catch (error) {
            console.log(error)
        }
       
    }
}