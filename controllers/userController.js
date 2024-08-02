const getUserById = async (req, res) => {
    const userId = req.params.id;

    const user = await someDBQueryToGetUser(userId);

    if (!user) {
        res.status(404).send("user not found");
        return;
    }

    res.send(`user ${user.name}`);
}