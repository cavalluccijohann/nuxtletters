import {Resend} from 'resend';

const resend = new Resend(useRuntimeConfig().private.resendApiKey);
export async function upsertAudience(email: string): Promise<any> {
    return await resend.contacts.create({
        email: email,
        firstName: '',
        lastName: '',
        unsubscribed: false,
        audienceId: '2635b679-8439-40b2-b4a5-96b137732ea3',
    });
}