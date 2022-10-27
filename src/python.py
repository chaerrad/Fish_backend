import torch
import torch.nn as nn
import torch.optim as optim
import torchvision

from torch.utils.data import DataLoader
from torch.optim import lr_scheduler
from torchvision import datasets, models, transforms

import numpy as np
import matplotlib.pyplot as plt
# plt.style.use('seaborn-white')

import time
import os
import copy
from PIL import Image
import torch.nn.functional as F
md = torch.load(
    '/home/ubuntu/fish_backend/src/resnet_total_with_test.pt', map_location='cpu')
md.eval()

test_img = Image.open(
    '/home/ubuntu/fish_backend/uploads/google2001.jpg').convert('RGB')
preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )])
# 연산을 gpu로 하겠다는 뜻.
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
test_img_preprocessed = preprocess(test_img)
batch_test_img_tensor = torch.unsqueeze(test_img_preprocessed, 0)
batch_test_img_tensor = batch_test_img_tensor.to(device)
md = md.to(device)
out = md(batch_test_img_tensor)

pred = out.argmax(dim=1)
print(pred.item())
index = out.argmax(1)
hy = max(F.softmax(out))
print(" ")
print(hy[index])
