const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')

module.exports = class Books extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            num:{
                type : Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey : true
            },
            title:{
                type : Sequelize.STRING(50),
                allowNull : false
            },
            author:{
                type : Sequelize.STRING(30),
                allowNull : false
            },
            company:{
                type : Sequelize.STRING(50),
                allowNull : false
            },
            isbn:{
                type : Sequelize.STRING(30),
                allowNull : false
            },
            count : {
                type: Sequelize.INTEGER,
                allowNull : false
            }
        },{ // 컬럼 외에 테이블에 대한 설정 지정
            sequelize,              // init 매개변수
            modelName : 'Books',     // 프로젝트에서 사용할 모델의 이름
            tableName : 'books',    // 실제 데이터데이스 테이블 이름
            charset : 'utf8',
        })
    }
}