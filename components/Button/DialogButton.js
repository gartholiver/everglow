import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function DialogButton({ children, frame, ...props }) {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <div className="button">
      <Button
        onClick={open}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-between gap-2 whitespace-nowrap">
          {children}
        </span>
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-teal-900/50">
          <div className="flex items-center justify-center min-h-full p-4">
            <DialogPanel
              transition
              className="w-full max-w-2xl rounded-xl overflow-hidden bg-white/5 relative h-[75vh] backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <iframe
                src={frame}
                className="absolute inset-0 size-full"
              ></iframe>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}