"use client"
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { InsertCommentPollApi } from "../../services/Poll";
import { toast } from "react-toastify";

const CommentModal = ({ isOpen, onOpenChange,commentsData,slug }: { isOpen: boolean; onOpenChange: (open: boolean) => void; commentsData:any;slug:string }) => {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = async() => {
    
   try {
    const data ={
       comment:commentText
    }
    const res = await InsertCommentPollApi(data,slug);
    if(res?.success){
      toast.success(res?.message);
    }else{
      console.log(res?.response?.data?.message);
    }
    
   } catch (error) {
    console.log(error);
    
   }finally{
      setCommentText("");
   }
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose:any) => (
          <>
            <div className="p-4">
              <div className="w-full max-h-[200px] overflow-y-scroll">
            {commentsData && commentsData.length > 0 ? (
              <ul>
            
                {commentsData.map((comment: any, index: number) => (
                  <li key={index} className="border-b py-2 text-gray-700">
                    <div
                     
                      className="flex items-center space-x-2"
                    >
                      <Image
                        src={
                          comment?.user?.profileImage ||
                          "https://i.ibb.co/K0wG22V/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"
                        }
                        alt="User Image"
                        width={30}
                        height={30}
                        className="w-7 h-7 rounded-full"
                      />
                      <p className="font-bold">@User</p>
                    </div>
                    <span className="ps-7 py-1">{comment.text}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-center">No comments found</p>
            )}
          </div>
          <div className="mt-2">
            <textarea
              className="w-full border p-2 rounded-md"
              placeholder="Leave a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
            </div>

          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CommentModal;
