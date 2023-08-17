const { sumTokensExport } = require("./helper/chain/ergo");
const { nullAddress } = require("./helper/tokenMapping");

module.exports = {
  timetravel: false,
  ergo: {
    tvl: sumTokensExport({
      owners: [
        "6Q6fbqfbMAogw42DWDtKuKt9frSKdqW92cmiPbeF2SnuYCS9Ca43ZAiJvR7Kjfp99STcigCqWYCTt7JzqeFASVd7q9nWZacKKe8bGKNN4o7y4Pzd6mZ9foAEXKzybfc2HDuvG2oCoxoAMC4dsnnvNwjAY8kYozoSdCfX6BrWj1NF6unYaMCo8es9sZJiUS6j26F8irUz4yNjPpLKgxxGxBUTGvgo2qRW59xHS6BQruPfPsJjvEYvSz2AeaVqxnw1jgtvBjX2ERB2pfNakZ3zC3B6aNSPFZNsA7QZBXUgvG9q1A8KXLMJXTYJ4RPYk7BcHoAvjdUj391nt1chC9g3P2vUZFo2DAzoDwbNtqr22ueNX8vhC743CAUVzvDSei3KXp4MFLeWuiAYEd7vvSMVPLMdy8Ak73McqJLH1hGPzTKsuDxeNmuxbpNGuuRzHSPNeo2mUcL7afg9z2mkZM6KLYQ4VTsRMXG9NT6Qx218xy4ok9qcBwaNnZzyoeHa28Hkm4urRwj1pDvUNj3pxodzvLVYQdGZ46TXf41MLsWL5oBRWXEKSpNZt3XLDeK1V3bvoSKxyHWUskVWKqtdYkdb1wc6pt9r5WH1Ndjk5RQ3whG4kW17rr63CuATNBRxtwt7wsCno8bRnLtnnLEyMK6KhBVRHKpPHRQELGecp7d8Ze8zoYo4Vz2VFQQ7uzaGDrRuyKgPhNhUh9rHk3CSounphWzc4CqGxqqyt6JST7YvBxDZDVDnDzJNGgVjXwJfTXmkz6PFwohCjZRr5JvBtQ7vJ7Y9kCRoq67uWrPUB2jzTYJ9NWTNpeN8z4rCU2h1i7m5KhKwuHEJheuLVpmFXYRQsFiVW3128jRidN52JqbPbSnvaDJ1UrXHd6yqzV8Xr6C9bKecv4s61maHp3t12WFovqSg5VzJAH2cwyyxDatLniGBuFb71jjumt6iNvvxBsE6zcLTr46ujspUXv7aNmsa2df8th8m1iHDDL4xnSKetRFgUN8DBUUSudyBZrS9PU58noS8gvH543YDVQLczvTaA6c6TDtCXvXeHUu3i1BEvbQAX7jcFJao4U1fTX7Cvb8DRehy9RLtsvZvjh9fWkGtmf6dmjgKWnzWTiZ8ibNheZ8wkMWUWafDRCr42kKmRzFNuirg8y9YaXfLBMYbvkQ3kwkVmC4kgyFF2MhaEzwVm5EXEZVX6QZYxKWnhrZbzVXuWGDu3Eb3uRLfPuhm7GhdeLbhK6dm6eYZb717KPwKpqBChZs4Mo6Jsi9HzxycPG1FzXDgruXaAt1esQDvoS2MYc5NPqkPSeuv5L2EHMEq2FwiwcJhPHABTTYEfH7SYmCsatXtkgRce6o8DVVT5Rd45xWoiNKxCeGU2apPHKv117fo4mQUhBNftKVNBytGGu1RRsrCknQVCFJzeWxCc2CFs1nPz6oxt1EueU7jmMu4qnaU8BBbzdgJ3DaKeVysVhNsuqPvqUcvYhnmVFK5RPJHxiLA5Vp65zWHvL69AmWKGxP9EsFY1tqLqSPGfgJ3Xvz16v1Kg2kbCda7ZGk6sn1e4ry8UkhQLkfFQxqFnHxgTn85Dfp9kWwVsRPKxM4EwQmPHNKpWg7rT2NdWz8D9Ggm5yV92YarSWQZGAWFuUV7pW4zZ3vmsn9Ay51mh2C4VFHWEGjnH91cNwpgNBVWt2AtVeW3uL78fDiYfG5iprTFyySLBc4rdHQZQofhdyz9p1hAJGC4iRFyi2RoNX8GsX9GrAAnt",
      ],
      tokens: [
        "089990451bb430f05a85f4ef3bcb6ebf852b3d6ee68d86d78658b9ccef20074f",
      ],
    }),
  },
};
