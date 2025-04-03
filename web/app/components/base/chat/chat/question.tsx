import type {
  FC,
  ReactNode,
} from 'react'
import {
  memo,
} from 'react'
import type { ChatItem } from '../types'
import type { Theme } from '../embedded-chatbot/theme/theme-context'
import { Markdown } from '@/app/components/base/markdown'
import { FileList } from '@/app/components/base/file-uploader'
import {
  RiUser3Line,
} from '@remixicon/react'
type QuestionProps = {
  item: ChatItem
  questionIcon?: ReactNode
  theme: Theme | null | undefined
}
const Question: FC<QuestionProps> = ({
  item,
  questionIcon,
  theme,
}) => {
  const {
    content,
    message_files,
  } = item

  return (
    <div className='flex justify-end mb-2 last:mb-0 pl-14'>
      <div className='group relative mr-4 max-w-full'>
        <div
          className='px-4 py-3 bg-[#FF2400] rounded-tl-[12px] rounded-br-none rounded-tr-[12px] rounded-bl-[12px] text-sm text-[#fff]'
        >
          {
            !!message_files?.length && (
              <FileList
                files={message_files}
                showDeleteAction={false}
                showDownloadAction={true}
              />
            )
          }
          <Markdown content={content} />
        </div>
        <div className='mt-1 h-[18px]' />
      </div>
      <div className='shrink-0 w-10 h-10 bg-[#FFD3CC] rounded-[8px] '>
        {
          questionIcon || (
            <div className='w-full h-full flex justify-center items-center'>
              <RiUser3Line className='w-[24px] h-[24px] text-[#FF2400]' />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default memo(Question)
