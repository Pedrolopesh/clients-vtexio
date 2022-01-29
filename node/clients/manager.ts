import { MasterData } from '@vtex/api'

import type { ManagerInput } from '../typings/managerInput'

export default class Manager extends MasterData {
  public async getUnique(id: string): Promise<any> {
    const resp = await this.getDocument({
      dataEntity: 'couponapiSchema',
      fields: ['_all'],
      id,
    })

    return resp
  }

  public async getAll(page: number, pageSize: number, where: string) {
    const resp = await this.searchDocuments({
      dataEntity: 'couponapiSchema',
      schema: 'couponapiSchema',
      fields: ['_all'],
      where,
      pagination: { page, pageSize },
    })

    return resp
  }

  public async create(managerInput: ManagerInput) {
    const resp = await this.createDocument({
      dataEntity: 'couponapiSchema',
      schema: 'couponapiSchema',
      fields: managerInput,
    })

    return resp
  }

  public async update(id: string, managerInput: ManagerInput) {
    await this.updatePartialDocument({
      dataEntity: 'couponapiSchema',
      fields: managerInput,
      id,
    })

    return { id, ...managerInput }
  }

  public async delete(id: string) {
    await this.deleteDocument({
      dataEntity: 'couponapiSchema',
      id,
    })

    return id
  }
}
