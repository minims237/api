const NewUser=async(parent,args,context,info)=>{
    const{
        nom,
        categorie,
        statut,
        date1,
        date2,
        date3, 
        photo
    }=args

    const user=await context.prisma.createUser({
        nom,
        categorie,
        statut,
        date1,
        date2,
        date3, 
        photo
    })
    return user
}

module.exports = {
    NewUser
};