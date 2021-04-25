import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesService{

    async create({ admin_id, text, user_id }: IMessageCreate){
        const messagesRepository = getCustomRepository(MessagesRepository);

        const message = messagesRepository.create({
            admin_id,
            text,
            user_id
        });

        await messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string) {
        const messagesRepository = getCustomRepository(MessagesRepository);

        const list = await messagesRepository.find({
            where: { user_id },
            relations: ["user"],
        });

        return list;
    }
}

export { MessagesService }