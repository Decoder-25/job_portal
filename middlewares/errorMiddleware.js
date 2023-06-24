//erroe middleware || NEXT function

const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({ 
        message: "Something went wrong",
        success: false,
        err, 
    });
};

export default errorMiddleware;