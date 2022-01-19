const info = () => "Bienvenu  sur notre api";
const users=async (parent, args, context, info) => {
    try {
        const user=await context.prisma.users();
        return user
    } catch (e) {
        throw new Error("chargement des utilisateur echouer")
    }
}

module.exports={
    users,
    info
}