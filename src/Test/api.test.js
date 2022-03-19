import axios from "axios";
import { useMyContext } from "../Context";

describe("testar chamada da api", () => {


    test("teste", async () => {
        let user = 'rafaaandrade'
        const response = await axios.get(`https://api.github.com/users/${user}`);
        const getAllKeys = Object.keys(response.data)
        // const verifyKeys = response.data.some((key) => key)
        console.log('getAllKeys',getAllKeys)
        expect(response.status).toBe(200)
        // const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    })
})