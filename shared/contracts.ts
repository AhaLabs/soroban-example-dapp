import * as Abundance from 'abundance-token'
import * as Crowdfund from 'crowdfund-contract'
import { Server } from 'soroban-client'
import config from './config.json'
const { network, rpcUrl } = config

export const abundance = new Abundance.Contract(
  Abundance.networks[network as keyof typeof Abundance.networks].contractId
)

export const crowdfund = new Crowdfund.Contract(
  Crowdfund.networks[network as keyof typeof Crowdfund.networks].contractId
)

export const server = new Server(rpcUrl, {
  allowHttp: rpcUrl.startsWith('http:'),
})
