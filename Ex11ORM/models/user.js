const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model{
    // sequelize에서 상속받을 2가지
    // init : user 필드 자료형 지정, 테이블 관련 설정
    // associate : 테이블 간의 관계 설정
    static init(sequelize){
        return super.init({ // 컬럼에 대한 설정 지정
            id :{
                type : Sequelize.STRING(50),
                primaryKey : true,
            },
            pw :{
                type : Sequelize.STRING(50),
                allowNull : false,
            },
            age :{
                type : Sequelize.INTEGER,
                allowNull : false,
            }
        },{ // 컬럼 외에 테이블에 대한 설정 지정
            sequelize,              // init 매개변수
            modelName : 'User',     // 프로젝트에서 사용할 모델의 이름
            tableName : 'users',    // 실제 데이터데이스 테이블 이름
            charset : 'utf8',
        })
    }
    static associate(db){
        // User 와 Project라는 객체가 있을 때
        // User 와 Project가 일 대 다 관계라면? *
        // * db.User.hasMany(db.Project,{foreignKey : 'id',sourceKey : 'id'})    // 1
        // 1 대 1 관계라면? : dbUser.hasOne
        
        // * db.Project.belongsTo(db.User,{foreignKey : 'id',targetKey : 'id'})  // 多
        // 다 대 다 관계라면? : db.belongsToMany
    }

}