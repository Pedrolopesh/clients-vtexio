import type { ManagerInput } from '../../typings/managerInput';

interface Args {
    couponInput: ManagerInput
}

export const resolveCreateCoupon = async (
    _:any,
    { couponInput }:Args,
    { clients: { manager: managerClient } }: Context
) => {
    try {

        return managerClient.create(couponInput);
        
    } catch (error) {
        console.info(error)

        return false
    }
}