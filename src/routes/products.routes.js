import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

router.post("/products", async (req, res) => {
  const newproduct = await prisma.product.create({
    data: req.body,
  });
  res.json(newproduct);
});

router.get("/products/:id", async (req, res) => {
  const productFound = await prisma.product.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      Category: true,
    },
  });

  return res.send(productFound);
});

router.delete("/products/:id", async (req, res) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  return res.send(deletedProduct);
});

router.put("/products/:id", async (req, res) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });

  return res.send(updatedProduct);
});

export default router;
