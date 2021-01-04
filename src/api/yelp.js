import axios from 'axios'


export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {
        Authorization: 'Bearer htgDv3iB0TJ_KxuX32OZUe-RTQ7aL4OEzOi7fCLRYw9f_B-ad4HLgPriq1VT0ldh_4YkB2lFK6n938z3x5IBTcpbOn5VCaqybiWr30wT5gCJowinvKpUAy9HeFPwX3Yx'
    }
})

