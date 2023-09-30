const express = require("express");
const cors = require("cors");
const utilsRoutes = require("./routes/utilsRoutes");
const groupRoutes = require("./routes/groupRoutes");

const app = express();
const port = 3003;
app.set("port", port);
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", async (req, res) => {
  res.send("Bienvenidos a la API geoloca");
});

app.use("/utils/", utilsRoutes);
app.use("/group/", groupRoutes);

/*app.get("/list/:episode", async (req, res) => {
  const { episode } = req.params;
  try {
    const data = await redisClient.lRange(episode, 0, -1);
    res.send(JSON.stringify(data));
  } catch (error) {
    res.send("Error al listar los personajes:", error);
  }
});

app.post("/create", (req, res) => {
  const { episode, character } = req.body;
  try {
    redisClient.lPush(episode, [character]);
    res.send("Personaje creado");
  } catch (error) {
    res.send("Error al cargar el personaje:", error);
  }
});

app.delete("/delete", (req, res) => {
  const { episode, character } = req.body;
  try {
    redisClient.lRem(episode, 1, character);
    res.send("Personaje eliminado");
  } catch (error) {
    res.send("Error al eliminar el personaje:", error);
  }
});*/

app.listen(app.get("port"), () => {
  console.log(`API running in http://localhost:${port}`);
});
